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

  SamaListeCollection = [];
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
        //alert('collection enrégistrée...');
        this.SamaListeCollection.push(res);
      },
      err => {
        console.log('Error');
      }
    );
  }

  showClick(collection) {
    this.collectionSelected = collection;
    if(!this.collectionSelected.models){
      this.collectionSelected.models=[];
      this.collectionSelected = this.collectionService.getCollectionDetails(this.collectionSelected.idCollection)
        .subscribe(res => {
          console.log(res);
          this.collectionSelected.models = res['models'];
        }, error1 => {
          console.log(error1);
        })
    }
  }

    getCollections() {
        return this.collectionService.getAllCollection().subscribe((data: Array<any>) => {
            this.SamaListeCollection = data;
        });
    }

    getCategories() {
        this.categorieService.getAllCategorie().subscribe(
            data => {
                this.categories = data;
            });
    }

    deleteCollection(id) {
      this.collectionService.deleteCollection(id).subscribe(
        (res) => {
          alert('collection supprimmée...');
          this.deleteInTableau(id);
        },
        err => console.error(err)
      );
    }

  deleteInTableau(id){
    console.log('non problem 1');
    const index = this.getIndexTabById(id);
    console.log('non problem 2');
    if(index >= 0){
      this.SamaListeCollection.splice(index, 1);
    }
    console.log('non problem 3');
  }

  getIndexTabById(id: number){
    const index = this.SamaListeCollection.findIndex(
      (s) => {
        return s.idCollection === id;
      }
    );
    return index;
  }

    updateCollection() {

    }
}
