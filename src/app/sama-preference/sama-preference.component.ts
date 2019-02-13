import { Component, OnInit } from '@angular/core';
import { ServicePreferenceService } from '../../service/service-preference.service';
import { ServiceConfigService } from '../../service/service-config.service';

@Component({
    selector: 'app-sama-preference',
    templateUrl: './sama-preference.component.html',
    styleUrls: ['./sama-preference.component.css']
})

export class SamaPreferenceComponent implements OnInit {
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

    add = false;

    SamaPreferences: any;
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
        return this.servicePreference.getPreference().subscribe((data) => {
            this.SamaPreferences = data;
        });
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
}
