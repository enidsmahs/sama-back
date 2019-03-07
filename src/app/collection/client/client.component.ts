import { Component, OnInit } from '@angular/core';
import {ServiceClientService} from '../../../service/service-client.service';

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

  }

}
