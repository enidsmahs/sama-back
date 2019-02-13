import { Component, OnInit } from '@angular/core';
import {ServiceCollectionService} from '../../../service/service-collection.service';
import { ServiceCategorieService } from '../../../service/service-categorie.service';

@Component({
  selector: 'app-liste-collection',
  templateUrl: './liste-collection.component.html',
  styleUrls: ['./liste-collection.component.css']
})
export class ListeCollectionComponent implements OnInit {

  SamaCollection = {
    'idCollection': 0,
    'nom': '',
    'date': '',
    'categorie': { 'idCategorie': 0 }
  };

  SamaCollectionSelected: any = {
    'idCollection': 0,
    'nom': '',
    'date': '',
    'categorie': { 'idCategorie': 0 }
  };
  SamaListeCollection: any;
  categories: any;

  constructor(private collectionService: ServiceCollectionService, private categorieService: ServiceCategorieService) { }

  ngOnInit() {
    this.getCollections();
    this.getCategories();
  }

  public enregistrerCollection(SamaCollection) {
    this.SamaCollection.idCollection = 0;
    this.SamaCollection.nom = SamaCollection.nom;
    this.SamaCollection.date = SamaCollection.date;
    this.SamaCollection.categorie.idCategorie = SamaCollection.categorie;

    this.collectionService.setCollection(this.SamaCollection);
    this.collectionService.saveCollection().subscribe(
      (res) => {
        alert('collection enrégistrée...');
      },
      err => {
        console.log('Error');
      });
  }

  showClick(pref: any) {
    this.SamaCollectionSelected = pref;
  }

  getCollections() {
    return this.collectionService.getAllCollection().subscribe((data) => {
      this.SamaListeCollection = data;
    });
  }

  getCategories() {
    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.categories = data;
      });
  }

}
