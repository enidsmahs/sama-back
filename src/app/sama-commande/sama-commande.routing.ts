import { Routes } from '@angular/router';
import { SamaCommandeComponent } from './sama-commande.component';

export const SamaCommandeRoutes: Routes = [{
    path: '',
    component: SamaCommandeComponent,
    data: {
        breadcrumb: 'Mes commandes'
    }
}];
