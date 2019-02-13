import { Routes } from '@angular/router';
import { SamaModeleComponent } from './sama-modele.component';

export const SamaModeleRoutes: Routes = [{
    path: '',
    component: SamaModeleComponent,
    data: {
        breadcrumb: 'Mes modèles'
    }
}];
