import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {SamaUserRoutes} from './sama-user.routing';
import {SamaUserComponent} from './sama-user.component';

@NgModule({
  imports:[
    SharedModule,
    BrowserModule,
    RouterModule.forChild(SamaUserRoutes)
  ],
  declarations:[
    SamaUserComponent
  ]
})
export class SamaUserModule {

}
