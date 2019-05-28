import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/tos',
  privacyPolicyUrl: '/tos',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};
const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  declarations: [LoginPage],
  entryComponents: [LoginPage]
})
export class LoginPageModule {}
