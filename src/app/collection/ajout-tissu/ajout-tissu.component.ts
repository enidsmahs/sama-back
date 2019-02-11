import { Component, OnInit } from '@angular/core';
import { ServiceTissuService } from '../../../service/service-tissu.service';

@Component({
  selector: 'app-ajout-tissu',
  templateUrl: './ajout-tissu.component.html',
  styleUrls: ['./ajout-tissu.component.css']
})
export class AjoutTissuComponent implements OnInit {

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

  constructor(private service: ServiceTissuService) { }

  ngOnInit() {
  }

  enregistrerTissu(SamaTissu) {
    this.SamaTissu.idTissu = 0;
    this.SamaTissu.nom = 'azerty';
    this.SamaTissu.typeTissu.idTypeTissu = 44;
    this.SamaTissu.description.idDesctiptionTissu = 1;
    this.SamaTissu.description.nom = 'azerty';
    this.SamaTissu.description.tissu = 'azerty';

   // this.service.setTissu(this.SamaTissu);
   // this.service.saveTissu();
  }

}
