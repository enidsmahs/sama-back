import { Component, OnInit } from '@angular/core';
import { ServiceTypeTissuService } from '../../../service/service-type-tissu.service';

@Component({
  selector: 'app-type-tissu',
  templateUrl: './type-tissu.component.html',
  styleUrls: ['./type-tissu.component.css']
})
export class TypeTissuComponent implements OnInit {

  add = false;

  samaTypeTissu = {
    'idTypeTissu': 0,
    'nom': '',
    'tissus': '',
    'ligneModelTissu': ''
  };

  SamaTypeTissus: any;

  SamaTypeTissuSelected: any = {
    'idTypeTissu': 0,
    'nom': '',
    'tissus': '',
    'ligneModelTissu': ''
  };

  constructor(private service: ServiceTypeTissuService) { }

  ngOnInit() {
    this.getAllTypeTissu();
  }

  public setAdd(test1){
    this.add=test1;
  }

  onSelect(type: any) {
    this.SamaTypeTissuSelected = type;
  }

  public enregistrerTypeTissu(samaTypeTissu) {
    this.samaTypeTissu.idTypeTissu = 0;
    this.samaTypeTissu.nom = samaTypeTissu.nom_type_tissu;

    /* console.log(this.samaTypeTissu);*/

     this.service.setTypeTissu(this.samaTypeTissu);
     this.service.saveTypeTissu();
  }

  getAllTypeTissu () {
    return this.service.getTypeTissu().subscribe((data) => {
      this.SamaTypeTissus = data;
    })
  }

  saveTissu(tissu) {
    return this.service.saveTissu({
      "idTissu": 0,
      "nom": tissu.nom,
      "typeTissu":{
        "idTypeTissu": this.SamaTypeTissuSelected.idTypeTissu
      }
    }).subscribe(res => {
      this.SamaTypeTissuSelected.tissus.push(res);
    })
  }

}
