import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
// import {
//   OktaAuthModule,
//   OktaCallbackComponent,
// } from '@okta/okta-angular';
import { HttpClientModule } from '@angular/common/http';

// const config = {
//   issuer: 'https://dev-843281.okta.com/oauth2/default',
//   redirectUri: 'http://localhost:4200/implicit/callback',
//   clientId: '0oa2cwsoyl0PwztWd4x6',
//   scope: 'openid profile email'
// };

const appRoutes: Routes = [
  { path: '', component: HomeComponent}
  // { path: 'implicit/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes),HttpClientModule], //OktaAuthModule.initAuth(config)
  exports: [RouterModule]
})
export class AppRoutingModule { }
