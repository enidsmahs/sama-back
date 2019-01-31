import { Component, OnInit } from '@angular/core';
import { ServiceTypeTissuService } from '../../../service/service-type-tissu.service';

@Component({
  selector: 'app-type-tissu',
  templateUrl: './type-tissu.component.html',
  styleUrls: ['./type-tissu.component.css']
})
export class TypeTissuComponent implements OnInit {

  samaTypeTissu = {
    'idTypeTissu': 0,
    'nom': '',
    'tissus': '',
    'ligneModelTissu': ''
  };

  SamaTypeTissus: any;

  SamaTypeTissuSelected = {
    'idTypeTissu': 0,
    'nom': '',
    'tissus': '',
    'ligneModelTissu': ''
  };
  SamaTissu = {
    'idTissu': 0,
    'nom': '',
    'typeTissu': {'idTypeTissu': 0},
    'description': {
      'idDesctiptionTissu': 0,
      'nom': '',
      'tissu': ''
    }
  };
  constructor(private service: ServiceTypeTissuService) { }

  ngOnInit() {
  }

  onSelect(type: any) {
    this.SamaTypeTissuSelected = type;
  }

  public enregistrerTypeTissu(samaTypeTissu) {
    this.samaTypeTissu.idTypeTissu = 0;
    this.samaTypeTissu.nom = samaTypeTissu.nom_type_tissu;

    console.log(this.samaTypeTissu);

    /*this.service.setTypeTissu(this.samaTypeTissu);
    this.service.saveTypeTissu();*/
  }

  getAllTypeTissu () {
    return this.service.getTypeTissu().subscribe()
  }

}
