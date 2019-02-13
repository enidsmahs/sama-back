import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SamaCollectionRoutes } from './sama-collection.routing';
import { SamaCollectionComponent } from './sama-collection.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(SamaCollectionRoutes), ReactiveFormsModule
    ],
    declarations: [SamaCollectionComponent]
})
export class SamaCollectionModule {

}
