import { Component, OnInit } from '@angular/core';
import { ServiceCategorieService } from '../../service/service-categorie.service';
import { Categorie } from '../model/model.categorie';

@Component({
  selector: "app-sama-categorie",
  templateUrl: "./sama-categorie.component.html"
})
export class SamaCategorieComponent implements OnInit {
  mesCategories: any = {
    idCategorie: 0,
    nom: null,
    date: null
  };

  categorieSelected: any = {
    idCategorie: 0,
    nom: null,
    date: null
  };
  SamaCategorie: Categorie = new Categorie();
  constructor(private categorieService: ServiceCategorieService) {}

  ngOnInit() {}

  getAllCategorie() {
    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.mesCategories = data;
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
