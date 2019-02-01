import { Component, OnInit } from '@angular/core';
import {ServiceModeleService} from '../../../service/service-modele.service';

@Component({
  selector: 'app-liste-modele',
  templateUrl: './liste-modele.component.html',
  styleUrls: ['./liste-modele.component.css']
})
export class ListeModeleComponent implements OnInit {

  SamaModele: any = {
    'idModel': 0,
    'nom': '',
    'date': '',
    'collection': [

    ],
    'ligneModelTissus': [

    ],
    'preferences': [

    ]
  };

  constructor(private serviceModele: ServiceModeleService) { }

  ngOnInit() {
  }

  public enregistrerModele(SamaModele) {

  }

}
