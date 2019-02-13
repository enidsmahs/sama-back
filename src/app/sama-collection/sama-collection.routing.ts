import { Routes } from '@angular/router';
import { SamaCollectionComponent } from './sama-collection.component';

export const SamaCollectionRoutes: Routes = [{
    path: '',
    component: SamaCollectionComponent,
    data: {
        breadcrumb: 'Mes collections'
    }
}];
