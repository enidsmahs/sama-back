import { NgModule } from '@angular/core';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ListeCollectionComponent } from './liste-collection/liste-collection.component';
import { ListeModeleComponent } from './liste-modele/liste-modele.component';
import { AjoutModeleComponent } from './ajout-modele/ajout-modele.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { ServiceCollectionService } from '../../service/service-collection.service';
import { AjoutPreferenceComponent } from './ajout-preference/ajout-preference.component';
import { AjoutTissuComponent } from './ajout-tissu/ajout-tissu.component';
import { TypeTissuComponent } from './type-tissu/type-tissu.component';
import { CommandeComponent } from './commande/commande.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ListeCollectionComponent, ListeModeleComponent, AjoutModeleComponent, AjoutCategorieComponent, AjoutPreferenceComponent, AjoutTissuComponent, TypeTissuComponent, CommandeComponent, ClientComponent]
})
export class CollectionModule { }
