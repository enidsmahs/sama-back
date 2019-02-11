import {Routes} from '@angular/router';
import {SamaUserComponent} from './sama-user.component';

export const SamaUserRoutes: Routes = [{
  path: '',
  component: SamaUserComponent,
  data: {
    breadcrumb: 'Uilisateurs'
  }
}]
