import { NgModule } from '@angular/core';
import { SamaPreferenceComponent } from './sama-preference.component';
import { RouterModule } from '@angular/router';
import { SamaPreferenceRoutes } from './sama-preference.routing';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SamaPreferenceRoutes)
  ],
  declarations: [SamaPreferenceComponent]
})
export class SamaPreferenceModule {}
