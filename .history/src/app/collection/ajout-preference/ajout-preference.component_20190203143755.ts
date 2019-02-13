import { Component, OnInit } from '@angular/core';
import { ServicePreferenceService } from '../../../service/service-preference.service';
import {HttpClient} from '@angular/common/http';
import {ServiceConfigService} from '../../../service/service-config.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ajout-preference',
  templateUrl: './ajout-preference.component.html',
  styleUrls: ['./ajout-preference.component.css']
})
export class AjoutPreferenceComponent implements OnInit {
  add = false;
  file: File = null;
  SamaPreference = {
    'idPreference': 0,
    'nom': '',
    'proprietes': [

    ]
  };

  SamaPreferencesSelected: any = {
    'idPreference': 0,
    'nom': '',
    'proprietes': [

    ]
  };

  SamaPreferences: any;

  info: any;

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

  public setAdd(test1) {
    this.add = test1;
  }

  selectFile(event) {
    this.file = event.target.files.item(0);
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

  savePropriete(prop) {

    this.servicePreference.uploadFile1({
      'idPropriete': 0,
      'valeur': prop.valeur,
      'preference': {'idPreference':this.SamaPreferencesSelected.idPreference}
    }, this.file).subscribe((res: any) => {
        if (res.type === 4) {
          console.log('11111111' + res.body);
          console.log(res.body);
          console.log(res);
          this.SamaPreferencesSelected.proprietes.push((res.body));
        }

      //console.log((<any>res));

      },err => console.error(err)
    );
  }

  getHost() {
    return this.serviceConfig.host();
  }
}
