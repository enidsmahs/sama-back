import { Component, OnInit } from '@angular/core';
import { ServiceConfigService } from '../../service/service-config.service';
import {ServiceCommandeService} from '../../service/service-commande.service';

@Component({
    selector: 'app-sama-commande',
    templateUrl: './sama-commande.component.html',
    styleUrls: ['./sama-commande.component.css']
})

export class SamaCommandeComponent implements OnInit {

  samaCommande: any;

    constructor(
        private serviceConfig: ServiceConfigService,
        private serviceCommande: ServiceCommandeService
    ) {}

    ngOnInit() {}

    getCommande() {
      this.serviceCommande.getCommande()
        .subscribe(res => {
            this.samaCommande = res;
          },
          err => {
            console.log(err);
          })
    }

    getHost() {
        return this.serviceConfig.host();
    }
}
