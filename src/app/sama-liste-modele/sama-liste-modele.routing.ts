import {Routes} from '@angular/router';
import {SamaModeleComponent} from '../sama-modele/sama-modele.component';
import {SamaListeModeleComponent} from './sama-liste-modele.component';

export const SamaListeModeleRoutes: Routes = [{
  path: '',
  component: SamaListeModeleComponent,
  data: {
    breadcrumb: 'Mes modèles'
  }
}]
