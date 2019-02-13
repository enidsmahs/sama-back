import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-sama-collection',
    templateUrl: './sama-collection.component.html',
    styleUrls: ['./sama-collection.component.css']
})
export class SamaCollectionComponent implements OnInit {
    samaCollection = {
        'idCollection': 0,
        'nom': '',
        'date': '',
        'categorie': { 'idCategorie': 0 }
    };

    collectionSelected: any = {
        'idCollection': 0,
        'nom': '',
        'date': '',
        'categorie': { 'idCategorie': 0 }
    };
    SamaListeCollection: any;

    constructor () {}

    ngOnInit () {
    }
}
