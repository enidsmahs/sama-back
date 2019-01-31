import { Component, OnInit } from '@angular/core';
import { ServicePreferenceService } from '../../../service/service-preference.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajout-preference',
  templateUrl: './ajout-preference.component.html',
  styleUrls: ['./ajout-preference.component.css']
})
export class AjoutPreferenceComponent implements OnInit {
  add=false;
  SamaPreference = {
    "idPreference": 0,
    "nom": "",
    "proprietes": [

    ]
  };
  SamaPreferences: any;
  SamaPreferencesSelected : any = {
    "idPreference": 0,
    "nom": "",
    "proprietes": [

    ]
  };

  Propriete: any = {
    'idPropriete': 0,
    'valeur': ''
  };

  constructor(private servicePreference: ServicePreferenceService, private router: Router) { }

  ngOnInit() {
    this.getPreferences();
  }

  affichePreference () {

  }

  showClick(pref: any) {
    this.SamaPreferencesSelected = pref;
  }

  getPreferences() {
    return this.servicePreference.getPreference().subscribe((data) => {
      this.SamaPreferences = data;
    });
  }

  mesProps(Propriete) {
    this.Propriete.valeur = Propriete.propriete;
    this.SamaPreference.proprietes.push(Propriete);
    console.log(this.SamaPreference);
  }

  public enregistrerPreference(SamaPreference) {

    this.SamaPreference.nom = SamaPreference.preference;

    /*console.log(this.SamaPreference)*/

    this.servicePreference.setPreference(this.SamaPreference);

    this.servicePreference.savePreference();

    this.getPreferences();

  }

  public setAdd(test1){
    this.add=test1;
  }

  public enregistrerPropriete(propriete){
    this.SamaPreferencesSelected.proprietes.push(propriete);
  }
}
