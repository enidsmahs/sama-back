import {Routes} from '@angular/router';
import {SamaLoginComponent} from './sama-login.component';

export const SamaLoginRoutes: Routes = [{
  path: '',
  component: SamaLoginComponent,
  data: {
    breadcrumb: 'Login'
  }
}]
