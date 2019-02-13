import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sama-categorie',
    templateUrl: './sama-categorie.component.html'
})
export class SamaCategorieComponent implements OnInit {
    mesCategories: any = {
        'idCategorie': 0,
        'nom': null,
        'date': null
    };

    categorieSelected: any = {

    };
    constructor() {}

    ngOnInit() {

    }
}
