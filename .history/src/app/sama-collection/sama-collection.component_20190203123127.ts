import { OnInit, Component } from '@angular/core';
import { ServiceCollectionService } from '../../service/service-collection.service';

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

    constructor (private collectionService: ServiceCollectionService) {}

    ngOnInit () {
    }

    public enregistrerCollection(SamaCollection) {
        this.samaCollection.idCollection = 0;
        this.samaCollection.nom = SamaCollection.nom;
        this.samaCollection.date = SamaCollection.date;
        this.samaCollection.categorie.idCategorie = SamaCollection.categorie;

        this.collectionService.setCollection(this.samaCollection);
        this.collectionService.saveCollection().subscribe(
            (res) => {
                alert('collection enrégistrée...');
            },
            err => {
                console.log('Error');
            });
    }
}
