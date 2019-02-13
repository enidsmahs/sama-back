import { Component, OnInit } from '@angular/core';
import { ServiceCategorieService } from '../../service/service-categorie.service';

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
        'idCategorie': 0,
        'nom': null,
        'date': null
    };
    constructor(private categorieService: ServiceCategorieService) {}

    ngOnInit() {

    }

    getAllCategorie() {
        this.categorieService.getAllCategorie()
            .subscribe((data) => {
                this.mesCategories = data;
            });
    }
}
