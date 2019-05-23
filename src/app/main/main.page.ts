import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  user: any = {};

  items = [{
    text: 'test',
    created: new Date(),
    pos: 0,
  }];

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  ngOnInit() {
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }
}
