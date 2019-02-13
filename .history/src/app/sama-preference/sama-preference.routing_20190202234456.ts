import { Routes } from '@angular/router';
import { SamaPreferenceComponent } from './sama-preference.component';

export const SamaPreferenceRoutes: Routes = [{
    path: '',
    component: SamaPreferenceComponent,
    data: {
        breadcrumb: 'Mes préférences'
    }
}];
