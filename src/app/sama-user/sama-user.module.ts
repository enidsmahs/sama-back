import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {SamaUserRoutes} from './sama-user.routing';
import {SamaUserComponent} from './sama-user.component';
import {CommonModule} from '@angular/common';
import { SamaUserInfoComponent } from './sama-user-info/sama-user-info.component';

@NgModule({
  imports:[
    SharedModule,
    CommonModule,
    RouterModule.forChild(SamaUserRoutes)
  ],
  declarations:[
    SamaUserComponent,
    SamaUserInfoComponent
  ]
})
export class SamaUserModule {

}
