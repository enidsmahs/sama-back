import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
      path: 'basic',
      loadChildren: './components/basic/basic.module#BasicModule'
    }, {
      path: 'advance',
      loadChildren: './components/advance/advance.module#AdvanceModule'
    }, {
      path: 'forms',
      loadChildren: './components/forms/forms.module#FormsModule'
    }, {
      path: 'bootstrap-table',
      loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
    }, {
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    }, {
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    }, {
      path: 'ajout-preference',
      loadChildren: './collection/ajout-preference/ajout-preference.component.ts'
    }, {
      path: 'liste-collection',
      loadChildren: './collection/liste-collection/liste-collection.component.ts'
    }, {
      path: 'liste-modele',
      loadChildren: './collection/liste-modele/liste-modele.component.ts'
    }, {
      path: 'ajout-modele',
      loadChildren: './collection/ajout-modele/ajout-modele.component.ts'
    }, {
      path: 'ajout-categorie',
      loadChildren: './collection/ajout-categorie/ajout-categorie.component.ts'
    }, {
      path: 'type-tissu',
      loadChildren: './collection/type-tissu/type-tissu.component.ts'
    }
  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
  ]
}, {
  path: '**',
  redirectTo: 'error/404'
}];
