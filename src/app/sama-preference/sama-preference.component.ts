import { Component, OnInit } from '@angular/core';
import { ServicePreferenceService } from '../../service/service-preference.service';
import { ServiceConfigService } from '../../service/service-config.service';
import {Categorie} from '../model/model.categorie';

@Component({
    selector: 'app-sama-preference',
    templateUrl: './sama-preference.component.html',
    styleUrls: ['./sama-preference.component.css']
})

export class SamaPreferenceComponent implements OnInit {
    file: File = null;
    methodeSave : boolean = false;
    SamaPreference = {
        'idPreference': 0,
        'nom': '',
        'proprietes': []
    };

    SamaPreferencesSelected: any = {
        'idPreference': 0,
        'nom': '',
        'proprietes': []
    };

    add = false;

    lengthPropriete = 0;

    SamaPreferences = [];
    constructor(
        private servicePreference: ServicePreferenceService,
        private serviceConfig: ServiceConfigService
    ) {}

    ngOnInit() {
      this.getAllPreferences();
    }

    showClick(preference: any) {
        this.SamaPreferencesSelected = preference;
    }

    public setAdd(test1) {
        this.add = test1;
    }

    selectFile(event) {
        this.file = event.target.files.item(0);
    }

    getAllPreferences() {
        return this.servicePreference.getPreference().subscribe((data: Array<any>) => {
            this.SamaPreferences = data;
        });
    }

    public enregistrerPreference(SamaPreference) {
        this.SamaPreference.nom = SamaPreference.preference;

        this.servicePreference.setPreference(this.SamaPreference);
        this.servicePreference.savePreference().subscribe(
          (res) => {
            //alert('preference enrégistrée...');
            this.SamaPreferences.push(res);
            this.SamaPreferencesSelected = res;
          },
          err => {
            console.log('Error');
          });
    }

    savePropriete(prop) {
        this.servicePreference.uploadFile1({
            'idPropriete': 0,
            'valeur': prop.valeur,
            'preference': { 'idPreference': this.SamaPreferencesSelected.idPreference }
        }, this.file).subscribe((res: any) => {
            if (res.type === 4) {
                console.log('11111111' + res.body);
                console.log(res.body);
                console.log(res);
                this.SamaPreferencesSelected.proprietes.push((res.body));
            }

            // console.log((<any>res));

        }, err => console.error(err)
        );
    }

    getHost() {
        return this.serviceConfig.host();
    }

    deletePreference(id) {
      this.servicePreference.deletePreference(id).subscribe(
        (res) => {
          // alert('catégorie supprimmée...');
          if(res == true){
            console.log("suppresion effectué au niveau de la BD")
            console.log(id);
            this.deleteInTableau(id);
          }
        },
        err => console.error(err)
      );
    }

    deleteInTableau(id){
      console.log('non problem 1');
      const index = this.getIndexTabById(id);
      console.log('non problem 2');
      if(index >= 0){
        this.SamaPreferences.splice(index, 1);
      }
      console.log('non problem 3');
    }

    getIndexTabById(id: number){
      const index = this.SamaPreferences.findIndex(
        (s) => {
          return s.idPreference === id;
        }
      );
      return index;
    }
}
