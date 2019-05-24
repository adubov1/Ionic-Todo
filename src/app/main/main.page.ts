import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
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

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private alertCtrl: AlertController) {}

  ngOnInit() {}



}
