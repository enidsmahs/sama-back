import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-sama-modele',
    templateUrl: './sama-modele.component.html',
    styleUrls: ['./sama-modele.component.css']
})
export class SamaModeleComponent implements OnInit {

    listeSamaModele: any = {
        'idModel': 0,
        'nom': '',
        'date': '',
        'collection': [],
        'ligneModelTissus': [],
        'preferences': []
    };

    samaModeleSelected: any = {
        'idModel': 0,
        'nom': '',
        'date': '',
        'collection': [],
        'ligneModelTissus': [],
        'preferences': []
    };

    constructor () {}

    ngOnInit() {}
}
