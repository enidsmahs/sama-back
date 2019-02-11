import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {SamaListeModeleRoutes} from './sama-liste-modele.routing';
import {SamaListeModeleComponent} from './sama-liste-modele.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SamaListeModeleRoutes)
  ],
  declarations: [SamaListeModeleComponent]
})
export class SamaListeModeleModule {

}
