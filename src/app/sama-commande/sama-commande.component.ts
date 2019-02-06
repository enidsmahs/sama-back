import { Component, OnInit } from '@angular/core';
import { ServiceConfigService } from '../../service/service-config.service';

@Component({
    selector: 'app-sama-commande',
    templateUrl: './sama-commande.component.html',
    styleUrls: ['./sama-commande.component.css']
})

export class SamaCommandeComponent implements OnInit {

    constructor(
        private serviceConfig: ServiceConfigService
    ) {}

    ngOnInit() {}

    getHost() {
        return this.serviceConfig.host();
    }
}
