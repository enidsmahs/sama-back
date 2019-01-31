import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-modele',
  templateUrl: './liste-modele.component.html',
  styleUrls: ['./liste-modele.component.css']
})
export class ListeModeleComponent implements OnInit {

SamaModele = {
  'idModel': 0,
  'nom': '',
  'date': '',
  'collection': {'idCollection': 0},
  'ligneModelTissus': [],
  'preferences': []
};

ligneModelTissus = {
   'typeTissu': { 'idTypeTissu': 15 }
};

preferences = { 'idPreference': 1 };

  constructor() { }

  ngOnInit() {
  }

  public enregistrerModele(SamaModele) {
      this.SamaModele.idModel = 0;
      this.SamaModele.nom = 'chemise';
      this.SamaModele.date = '25/01/2019';
      this.SamaModele.collection.idCollection = 10;
      this.SamaModele.ligneModelTissus.push(this.ligneModelTissus);
      this.SamaModele.preferences.push(this.preferences);

      console.log(this.SamaModele);
  }

}
