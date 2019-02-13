import { Component, OnInit } from '@angular/core';

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

    SamaPreferences: any;
    constructor() {}

    ngOnInit() {

    }
}
