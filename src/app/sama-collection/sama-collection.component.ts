import {OnInit, Component, Input} from '@angular/core';
import { ServiceCollectionService } from '../../service/service-collection.service';
import { ServiceCategorieService } from '../../service/service-categorie.service';


@Component({
  selector: 'app-sama-collection',
  templateUrl: './sama-collection.component.html',
  styleUrls: ['./sama-collection.component.css']
})
export class SamaCollectionComponent implements OnInit {



  collectionSelected: any = {
    idCollection: 0,
    nom: '',
    date: '',
    categorie: { idCategorie: 0 }
  };
  categories: any;

  constructor(
      private collectionService: ServiceCollectionService,
      private categorieService: ServiceCategorieService
    ) {}

  ngOnInit() {

    this.getCategories();
    console.log('test observable');
  //   let c=1;
  //   const counter = Observable.of(c);
  //   counter.subscribe(
  //     (value) => {
  //       console.log(value);
  //     },
  //     (error) => {
  //       console.log('Uh-oh, an error occurred! : ' + error);
  //     },
  //     () => {
  //       console.log('Observable complete!');
  //     }
  //   );
  // c=2;
  // console.log('les subject');
  //   const subject = new Subject<any>();
  //
  //   subject.subscribe((number) => {
  //     console.log(1, number);
  //   });
  //   subject.next(2);
  //   subject.next("sfsdf");
  //   subject.complete();

  }

    getCategories() {
        this.categorieService.getAllCategorie().subscribe(
            data => {
                this.categories = data;
            });
    }




}
