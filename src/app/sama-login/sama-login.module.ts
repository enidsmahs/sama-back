import {NgModule} from '@angular/core';
import {SamaLoginComponent} from './sama-login.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SamaLoginRoutes} from './sama-login.routing';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(SamaLoginRoutes)
  ],
  declarations: [SamaLoginComponent]
})

export class SamaLoginModule {}
