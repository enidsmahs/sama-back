import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AuthGuardService} from './guards/auth-guard.service';
import {RoleGuardService} from '../service/RoleGuardService.service';

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
      loadChildren: './dashboard/dashboard.module#DashboardModule',
      canActivate: [AuthGuardService]
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
      path: 'ajout-categorie',
      loadChildren: './collection/ajout-categorie/ajout-categorie.component.ts'
    }, {
      path: 'type-tissu',
      loadChildren: './collection/type-tissu/type-tissu.component.ts'
    }, {
      path: 'sama-collection',
      loadChildren: './sama-collection/sama-collection.module#SamaCollectionModule',
      canActivate: [AuthGuardService]
    }, {
      path: 'sama-categorie',
      loadChildren: './sama-categorie/sama-categorie.module#SamaCategorieModule',
      canActivate: [AuthGuardService]
    }, {
      path: 'sama-preference',
      loadChildren: './sama-preference/sama-preference.module#SamaPreferenceModule',
      canActivate: [AuthGuardService]
    }, {
      path: 'sama-tissu',
      loadChildren: './sama-tissu/sama-tissu.module#SamaTissuModule',
      canActivate: [AuthGuardService]
    }, {
      path: 'sama-modele',
      loadChildren: './sama-modele/sama-modele.module#SamaModeleModule',
      canActivate: [AuthGuardService]
    }, {
      path: 'sama-liste-modele',
      loadChildren: './sama-liste-modele/sama-liste-modele.module#SamaListeModeleModule',
      canActivate: [AuthGuardService]
    }, {
      path: 'sama-commande',
      loadChildren: './sama-commande/sama-commande.module#SamaCommandeModule',
      canActivate: [AuthGuardService]
    }, {
      path: 'sama-user',
      loadChildren: './sama-user/sama-user.module#SamaUserModule'
    }, {
      path: 'sama-login',
      loadChildren: './sama-login/sama-login.module#SamaLoginModule'
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
