import { Component, OnInit } from '@angular/core';
import {ServiceCategorieService} from '../../../service/service-categorie.service';
import {Categorie} from '../../model/model.categorie';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent implements OnInit {

  SamaListeCategorie: any;
  SamaCategorie: Categorie = new Categorie();

  constructor(private categorieService: ServiceCategorieService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    return this.categorieService.getAllCategorie().subscribe((data) => {
      this.SamaListeCategorie = data;
    });
  }

  saveCategorie() {
    this.categorieService.saveCategorie(this.SamaCategorie);
  }

  deleteCategorie() {
    this.categorieService.deleteCategorie(0);
  }

  public enregistrerCategorie(SamaCategorie): void {
    this.SamaCategorie.nom = SamaCategorie.nom;
    this.SamaCategorie.date = SamaCategorie.date;

    this.categorieService.saveCategorie(this.SamaCategorie);
  }

}
