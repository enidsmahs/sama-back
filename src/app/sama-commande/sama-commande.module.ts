import { NgModule } from '@angular/core';
import { SamaCommandeComponent } from './sama-commande.component';
import { RouterModule } from '@angular/router';
import { SamaCommandeRoutes } from './sama-commande.routing';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SamaCommandeRoutes)
  ],
  declarations: [SamaCommandeComponent]
})
export class SamaCommandeModule {}
