import { OnInit, Component } from '@angular/core';
import { ServiceModeleService } from '../../service/service-modele.service';

@Component({
    selector: 'app-sama-modele',
    templateUrl: './sama-modele.component.html',
    styleUrls: ['./sama-modele.component.css']
})
export class SamaModeleComponent implements OnInit {

    SamaModele: any = {
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

    constructor (
        private serviceModele: ServiceModeleService
    ) {}

    ngOnInit() {}

    enregistrerModele(SamaModele) {
        this.SamaModele.nom = SamaModele.modele;
        this.SamaModele.date = SamaModele.date;

        console.log(this.SamaModele);

        // this.serviceModele.setModele(this.SamaModele);
        // this.serviceModele.saveModele();
    }
}
