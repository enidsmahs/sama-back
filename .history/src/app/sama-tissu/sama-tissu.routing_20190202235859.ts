import { Routes } from '@angular/router';
import { SamaTissuComponent } from './sama-tissu.component';

export const SamaTissuRoutes: Routes = [{
    path: '',
    component: SamaTissuComponent,
    data: {
        breadcrumb: 'Mes tissus'
    }
}];
