import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, ModalController } from '@ionic/angular';
import { Router} from '@angular/router';
import { AddOrEditComponent } from '../add-or-edit/add-or-edit.component';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  user: any = {};
  task: any;

  items = [];
  @Input('title') title: string;
  @Input('name') name: string;
  @Input('allowDone') allowDone: boolean;
  loading = true;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private alertCtrl: AlertController,
    private router: Router,
    private modalCtrl: ModalController,
    private notifs: LocalNotifications,
  ) {
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
          item['fdate'] = new Date(item['date']).toLocaleString();
        });
        this.loading = false;
      });
    });
  }

  async add() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({component: AddOrEditComponent});
    await modal.present();
    const res = await modal.onDidDismiss();
    console.log(res);
    this.handleAddItem(res.data.task, res.data.date);
  }

  async edit(item) {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: AddOrEditComponent,
      componentProps: { task: item.text, date: item.date }
    });
    console.log(item.text, item.date);
    await modal.present();
    const res = await modal.onDidDismiss();
    if (!res.data.date) {
      res.data.date = item.date;
    }
    if (res.data.task === '') {
      res.data.task = item.text;
    }
    this.handleEditItem(res.data.task, item, res.data.date);
  }

  handleAddItem(text: string, date) {
    if (!text.trim().length) {
      return;
    }

    const nowS = Math.round( +new Date() / 1000); 
    this.notifs.schedule({
      id: nowS,
      title: 'Taskit',
      text: text,
      trigger: { at: new Date(date) }
    });
    console.log('nowS', nowS);
    this.db.collection(`users/${this.afAuth.auth.currentUser.uid}/${this.name}`).add({
      text,
      date,
      pos: this.items.length ? this.items[0].pos + 1 : 0,
      created: nowS,
    });

  }

  handleEditItem(text: string, item, date?) {
    this.db.doc(`users/${this.afAuth.auth.currentUser.uid}/${this.name}/${item.id}`).get().subscribe((doc) => {
      let editNotifID = doc.data().created;
      this.notifs.update({
        id: editNotifID,
        text: text,
        trigger: { at: new Date(date) }
      });
    }); 
    

    this.db.doc(`users/${this.afAuth.auth.currentUser.uid}/${this.name}/${item.id}`).set({
      text,
      date
    }, {merge: true});
  }

  delete(item) {
    this.db.doc(`users/${this.afAuth.auth.currentUser.uid}/${this.name}/${item.id}`).delete();
  }

  crit(item) {
    this.moveItem(item, 'main');
  }

  complete(item) {
    this.moveItem(item, 'done');
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

  moveByOffset(index, offset) {
    this.db.doc(`users/${this.afAuth.auth.currentUser.uid}/${this.name}/${this.items[index].id}`).set({
      pos: this.items[index + offset].pos
    }, {merge: true});
    this.db.doc(`users/${this.afAuth.auth.currentUser.uid}/${this.name}/${this.items[index + offset].id}`).set({
      pos: this.items[index].pos
    }, {merge: true});
  }
}
