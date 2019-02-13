import { NgModule } from '@angular/core';
import { SamaTissuComponent } from './sama-tissu.component';
import { RouterModule } from '@angular/router';
import { SamaTissuRoutes } from './sama-tissu.routing';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild(SamaTissuRoutes)],
  declarations: [SamaTissuComponent]
})
export class SamaTissuModule {}
