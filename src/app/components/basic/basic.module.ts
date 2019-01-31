import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import {RouterModule} from '@angular/router';
import {BasicRoutes} from './basic.routing';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';
import {SharedModule} from '../../shared/shared.module';
import { ListeCollectionComponent } from '../../collection/liste-collection/liste-collection.component';
import { ListeModeleComponent } from '../../collection/liste-modele/liste-modele.component';
import { AjoutModeleComponent } from '../../collection/ajout-modele/ajout-modele.component';
import {AjoutCategorieComponent} from '../../collection/ajout-categorie/ajout-categorie.component';
import { AjoutPreferenceComponent } from '../../collection/ajout-preference/ajout-preference.component';
import { AjoutTissuComponent } from '../../collection/ajout-tissu/ajout-tissu.component';
import {TypeTissuComponent} from '../../collection/type-tissu/type-tissu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
    SharedModule
  ],
  declarations: [
    BasicComponent,
    BreadcrumbComponent,
    ButtonComponent,
    TypographyComponent,
    ListeCollectionComponent, AjoutPreferenceComponent, AjoutPreferenceComponent, TypeTissuComponent, ListeModeleComponent, AjoutModeleComponent, AjoutCategorieComponent
  ]
})
export class BasicModule { }
