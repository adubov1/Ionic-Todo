import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class NotifsService {

  user: any = {};

  constructor(public afs: AngularFirestore, private platform: Platform, public firebase: Firebase, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        console.log('User Assigned: ', this.user);
      }
    });
  }

  async getToken() {
    let token;
    await (this.user);
    if (this.platform.is('android')) {
      token = await this.firebase.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }

    this.saveTokenToFirestore(token);
  }

  async saveTokenToFirestore(token) {
    if (!token) {
      return;
    }
    let userid;
    await (typeof this.user.uid !== undefined);
    console.log('uid from user: ', this.user.uid);
    await this.afAuth.authState.subscribe(user => {
      if (user) {
        userid = user.uid;
        console.log('UserId Assigned in func: ', userid);
        const devicesRef = this.afs.collection('devices');

        const docData = {
          token,
          userid,
        };
        console.log('saveTokenToFirestore ran');
        return devicesRef.doc(token).set(docData);
      }
    });
  }
  onNotifications() {
    return this.firebase.onNotificationOpen();
  }
}
