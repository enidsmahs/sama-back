import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SamaCollectionRoutes } from './sama-collection.routing';
import { SamaCollectionComponent } from './sama-collection.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SamaListeModeleComponent} from './sama-liste-modele/sama-liste-modele.component';
import { ListeModeleComponent } from './liste-modele/liste-modele.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(SamaCollectionRoutes), ReactiveFormsModule
    ],
    declarations: [SamaCollectionComponent,SamaListeModeleComponent, ListeModeleComponent]
})
export class SamaCollectionModule {

}
