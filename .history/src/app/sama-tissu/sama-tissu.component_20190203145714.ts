import { OnInit, Component } from '@angular/core';
import { ServiceTissuService } from '../../service/service-tissu.service';
@Component({
    selector: 'app-sama-tissu',
    templateUrl: './sama-tissu.component.html',
    styleUrls: ['./sama-tissu.component.css']
})
export class SamaTissuComponent implements OnInit {

    SamaTissu = {
        'idTissu': 0,
        'nom': '',
        'typeTissu': { 'idTypeTissu': 0 },
        'description': {
            'idDesctiptionTissu': 0,
            'nom': '',
            'tissu': ''
        }
    };
    constructor(
        private service: ServiceTissuService
    ) {}

    ngOnInit() {

    }
}
