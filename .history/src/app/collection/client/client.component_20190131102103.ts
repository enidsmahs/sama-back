import { Component, OnInit } from '@angular/core';
import {ServiceClientService} from '../../../service/service-client-service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  samaClient = {
    "idClient":1,
    "nom":"Kane",
    "prenom":"Abdoulaye",
    "mail":"ablaye@gmail.com",
    "telephone":"773539863",
    "dateCreation":"2015-03-01"
};

  constructor(private serviceClient: ServiceClientService) { }

  ngOnInit() {
  }

  save(samaClient) {
    this.samaClient.idClient = 0;
    this.samaClient.nom = 'Kane';
    this.samaClient.prenom = 'Abdoulaye';
    this.samaClient.mail = 'ablaye@gmail.com';
    this.samaClient.telephone = '773539863';
    this.samaClient.dateCreation = '2015-03-01';

     this.serviceClient.setClient(samaClient);
     this.serviceClient.saveClient();
  }

}
