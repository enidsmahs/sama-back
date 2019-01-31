import { Component, OnInit } from '@angular/core';
import { ServicePreferenceService } from '../../../service/service-preference.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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

  constructor(private servicePreference: ServicePreferenceService, private http: HttpClient) { }

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

  public setAdd(test1){
    this.add=test1;
  }

  public enregistrerPropriete(propriete){
    this.SamaPreferencesSelected.proprietes.push(propriete);
    /*this.SamaPreference.proprietes.push(propriete);*/


  }

  public enregistrerPreference(SamaPreference) {

    this.SamaPreference.nom = SamaPreference.preference;

    this.servicePreference.setPreference(this.SamaPreference);
    this.servicePreference.savePreference();

  }

  savePropriete(propriete) {
    this.servicePreference.savePropriete({
      "idPropriete": 0,
      "valeur": propriete.valeur,
      "preference": {"idPreference": this.SamaPreferencesSelected.idPreference}
    }).subscribe(
      (res) => {
        alert('propriété enrégistré...');
        this.SamaPreferencesSelected.proprietes.push(res);
      },
      err => {
        console.log('Error');
      });
  }
}
