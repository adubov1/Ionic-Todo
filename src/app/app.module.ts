import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { LoginPageModule } from './login/login.module';
import { MzButtonModule } from 'ngx-materialize';
import { ComponentsModule } from './components/components.module';
import { AddOrEditComponent } from './components/add-or-edit/add-or-edit.component';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


const config = {
    apiKey: 'AIzaSyB_uIpuhkWlUmy3Y45VRdNklGocqyCfL3U',
    authDomain: 'todo-ionic4.firebaseapp.com',
    databaseURL: 'https://todo-ionic4.firebaseio.com',
    projectId: 'todo-ionic4',
    storageBucket: 'todo-ionic4.appspot.com',
    messagingSenderId: '199651700505',
    appId: '1:199651700505:web:6518b416a89b2e9b'
  };

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    LoginPageModule,
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    LocalNotifications,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
