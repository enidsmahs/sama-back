import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import {ScrollModule} from './scroll/scroll.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ServiceCollectionService } from '../service/service-collection.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ServiceCategorieService} from '../service/service-categorie.service';
import { ServicePreferenceService } from '../service/service-preference.service';
import { ServiceTissuService } from '../service/service-tissu.service';
import { ServiceModeleService } from '../service/service-modele.service';
import {ServiceTypeTissuService} from '../service/service-type-tissu.service';
import {ServiceCommandeService} from '../service/service-commande.service';
import {ServiceConfigService} from '../service/service-config.service';
import {AuthGuardService} from './guards/auth-guard.service';
import {AlertService} from '../service/alert.service';
import {AuthenticationService} from '../service/authentification.service';
import {SessionService} from '../service/session.service';
import {ServiceClientService} from '../service/service-client.service';
import {RoleGuardService} from '../service/RoleGuardService.service';
import {ServiceUserService} from '../service/service-user.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    ScrollModule,
    HttpClientModule, ReactiveFormsModule
  ],
  exports: [ScrollModule],
  providers: [
    ServiceCollectionService,
    ServiceCategorieService,
    ServiceTypeTissuService,
    ServicePreferenceService,
    ServiceTissuService,
    ServiceModeleService,
    ServiceModeleService,
    ServiceCommandeService,
    ServiceConfigService,
    AuthGuardService,
    AlertService, AuthenticationService, SessionService, ServiceClientService, RoleGuardService, ServiceUserService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
