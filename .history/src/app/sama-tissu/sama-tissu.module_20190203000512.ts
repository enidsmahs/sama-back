import { NgModule } from '@angular/core';
import { SamaTissuComponent } from './sama-tissu.component';
import { RouterModule } from '@angular/router';
import { SamaTissuRoutes } from './sama-tissu.routing';

@NgModule({
    imports: [
        RouterModule.forChild(SamaTissuRoutes)
    ],
    declarations: [SamaTissuComponent]
})
export class SamaTissuModule {

}
