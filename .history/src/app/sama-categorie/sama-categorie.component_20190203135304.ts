import { Component, OnInit } from '@angular/core';
import { ServiceCategorieService } from '../../service/service-categorie.service';
import { Categorie } from '../model/model.categorie';

@Component({
  selector: 'app-sama-categorie',
  templateUrl: './sama-categorie.component.html',
    styleUrls: ['./sama-categorie.component.css']
})
export class SamaCategorieComponent implements OnInit {

  SamaCategorie: Categorie = new Categorie();

  mesCategories = {
    idCategorie: 0,
    nom: null,
    date: null
  };

  categorieSelected: any = {
    idCategorie: 0,
    nom: null,
    date: null
  };

  SamaListeCategorie: any;

  showClick(cate) {
      this.categorieSelected = cate;
  }

  constructor(private categorieService: ServiceCategorieService) {}

  ngOnInit() {}

  getAllCategorie() {
    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.SamaListeCategorie = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  saveCategorie() {
    this.categorieService.saveCategorie(this.SamaCategorie);
  }
}
