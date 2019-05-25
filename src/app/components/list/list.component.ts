import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  user: any = {}

  items = [];
  @Input('title') title: string;
  @Input('name') name: string;
  @Input('allowDone') allowDone: boolean;
  loading = true;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private alertCtrl: AlertController, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }

      this.db.collection(`users/${this.afAuth.auth.currentUser.uid}/${this.name}`, ref => {
        return ref.orderBy('pos', 'desc');
      }).snapshotChanges().subscribe(colSnap => {
        this.items = [];
        colSnap.forEach(a => {
          const item = a.payload.doc.data();
          item['id'] = a.payload.doc.id;
          this.items.push(item);
        });
        this.loading = false;
      });
    });
  }

  async add() {
    this.addOrEdit('New Task', val => this.handleAddItem(val.task));
  }

  async edit(item) {
    this.addOrEdit('Edit Task', val => this.handleEditItem(val.task, item), item);
  }

  async addOrEdit(header, handler, item?) {
    const alert = await this.alertCtrl.create({
      header,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler,
        }
      ],
      inputs: [
        {
          name: 'task',
          type: 'text',
          placeholder: 'My task',
          value: item ? item.text : '',
        },
      ],
    });

    await alert.present();

    alert.getElementsByTagName('input')[0].focus();
  }

  handleAddItem(text: string) {
    if (!text.trim().length) {
      return;
    }

    const now = new Date();
    const nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(),
      now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));

    this.db.collection(`users/${this.afAuth.auth.currentUser.uid}/${this.name}`).add({
      text,
      pos: this.items.length ? this.items[0].pos + 1 : 0,
      created: nowUtc,
    });

  }

  handleEditItem(text: string, item) {
    this.db.doc(`users/${this.afAuth.auth.currentUser.uid}/${this.name}/${item.id}`).set({
      text,
    }, {merge: true});
  }

  delete(item) {
    this.db.doc(`users/${this.afAuth.auth.currentUser.uid}/${this.name}/${item.id}`).delete();
  }

  crit(item) {
    this.moveItem(item, 'crit');
  }

  complete(item) {
    this.moveItem(item, 'done');
  }

  later(item) {
    this.moveItem(item, 'later');
  }

  moveItem(item, list: string) {
    this.db.doc(`users/${this.afAuth.auth.currentUser.uid}/${this.name}/${item.id}`).delete();

    const id = item.id;
    delete item.id;

    this.db.collection(`users/${this.afAuth.auth.currentUser.uid}/${list}`, ref => {
      return ref.orderBy('pos', 'desc').limit(1);
    }).get().toPromise().then(qSnap => {
      item.pos = 0;
      qSnap.forEach(a => {
        item.pos = a.data().pos + 1;
      });
      this.db.doc(`users/${this.afAuth.auth.currentUser.uid}/${list}/${id}`).set(item);
    });
  }
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }
  navDone() {
    if (this.router.url === '/main') {
      this.router.navigateByUrl('/done');
    } else if (this.router.url === '/done') {
      this.router.navigateByUrl('/main');
    }
  }

}
