import {Routes} from '@angular/router';
import {SamaUserComponent} from './sama-user.component';
import {SamaUserInfoComponent} from './sama-user-info/sama-user-info.component';

export const SamaUserRoutes: Routes = [
  {
    path: '',
    component: SamaUserComponent,
    data: {
      breadcrumb: 'Uilisateurs'
    }
  },
  {
    path: 'sama-user-info/:idClient',
    component: SamaUserInfoComponent
  }
]
