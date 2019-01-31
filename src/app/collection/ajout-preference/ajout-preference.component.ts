import { Component, OnInit } from '@angular/core';
import { ServicePreferenceService } from '../../../service/service-preference.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceConfigService} from '../../../service/service-config.service';

@Component({
  selector: 'app-ajout-preference',
  templateUrl: './ajout-preference.component.html',
  styleUrls: ['./ajout-preference.component.css']
})
export class AjoutPreferenceComponent implements OnInit {
  add=false;
  file:File;
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

  constructor(private servicePreference: ServicePreferenceService, private http: HttpClient,
              private serviceConfig: ServiceConfigService) { }

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
  selectFile(event){
    this.file=event.target.files.item(0);
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
    this.servicePreference.uploadFile1({
      'idPropriete': 0,
      'valeur': propriete.valeur,
      'preference':{'idPreference':this.SamaPreferencesSelected.idPreference},
      'image':this.file
    }, this.file).subscribe((res) => {
      alert('proprieté enrégistrée...');
      this.SamaPreferencesSelected.proprietes.push(res);
    });
  }

  getHost() {
    return this.serviceConfig.host();
  }
}
