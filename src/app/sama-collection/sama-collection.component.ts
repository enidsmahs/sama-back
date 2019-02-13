import { OnInit, Component } from '@angular/core';
import { ServiceCollectionService } from '../../service/service-collection.service';
import { ServiceCategorieService } from '../../service/service-categorie.service';

@Component({
  selector: 'app-sama-collection',
  templateUrl: './sama-collection.component.html',
  styleUrls: ['./sama-collection.component.css']
})
export class SamaCollectionComponent implements OnInit {
  samaCollection = {
    idCollection: 0,
    nom: '',
    date: '',
    categorie: { idCategorie: 0 }
  };

  collectionSelected: any = {
    idCollection: 0,
    nom: '',
    date: '',
    categorie: { idCategorie: 0 }
  };

  SamaListeCollection: any;
  categories: any;

  constructor(
      private collectionService: ServiceCollectionService,
      private categorieService: ServiceCategorieService
    ) {}

  ngOnInit() {
    this.getCategories();
    this.getCollections();
  }

  public enregistrerCollection(SamaCollection) {
    this.samaCollection.idCollection = 0;
    this.samaCollection.nom = SamaCollection.nom;
    this.samaCollection.date = SamaCollection.date;
    this.samaCollection.categorie.idCategorie = SamaCollection.categorie;

    this.collectionService.setCollection(this.samaCollection);
    this.collectionService.saveCollection().subscribe(
      res => {
        alert('collection enrégistrée...');
      },
      err => {
        console.log('Error');
      }
    );
  }

  showClick(collection) {
    this.collectionSelected = collection;
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
