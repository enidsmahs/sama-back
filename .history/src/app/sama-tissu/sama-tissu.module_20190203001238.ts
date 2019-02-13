import { NgModule } from '@angular/core';
import { SamaTissuComponent } from './sama-tissu.component';
import { RouterModule } from '@angular/router';
import { SamaTissuRoutes } from './sama-tissu.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule.forChild(SamaTissuRoutes),
        CommonModule
    ],
    declarations: [SamaTissuComponent]
})
export class SamaTissuModule {

}
