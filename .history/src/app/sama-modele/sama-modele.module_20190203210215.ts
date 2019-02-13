import { NgModule } from '@angular/core';
import { SamaModeleComponent } from './sama-modele.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SamaModeleRoutes } from './sama-modele.routing';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(SamaModeleRoutes)
    ],
    declarations: [SamaModeleComponent]
})
export class SamaModeleModule {

}
