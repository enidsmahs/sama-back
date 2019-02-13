import { NgModule } from '@angular/core';
import { SamaCategorieComponent } from './sama-categorie.component';
import { RouterModule } from '@angular/router';
import { SamaCategorieRoutes } from './sama-categorie.routing';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        RouterModule.forChild(SamaCategorieRoutes)
    ],
    declarations: [SamaCategorieComponent]
})
export class SamaCategorieModule {

}
