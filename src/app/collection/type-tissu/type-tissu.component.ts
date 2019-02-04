import { Component, OnInit } from '@angular/core';
import { ServiceTypeTissuService } from '../../../service/service-type-tissu.service';
import {ServiceConfigService} from '../../../service/service-config.service';

@Component({
  selector: 'app-type-tissu',
  templateUrl: './type-tissu.component.html',
  styleUrls: ['./type-tissu.component.css']
})
export class TypeTissuComponent implements OnInit {

  add = false;
  file: File = null;

  samaTypeTissu = {
    'idTypeTissu': 0,
    'nom': '',
    'tissus': [

    ]
  };

  SamaTypeTissus: any;

  SamaTypeTissuSelected: any = {
    'idTypeTissu': 0,
    'nom': '',
    'tissus': [

    ]
  };

  constructor(private service: ServiceTypeTissuService,
              private serviceConfig: ServiceConfigService) { }

  ngOnInit() {
    this.getAllTypeTissu();
  }

  public setAdd(test1) {
    this.add = test1;
  }

  onSelect(type: any) {
    this.SamaTypeTissuSelected = type;
  }

  public enregistrerTypeTissu(samaTypeTissu) {
    this.samaTypeTissu.idTypeTissu = 0;
    this.samaTypeTissu.nom = samaTypeTissu.nom_type_tissu;

    /* console.log(this.samaTypeTissu);*/

     this.service.setTypeTissu(this.samaTypeTissu);
     this.service.saveTypeTissu();
  }

  getAllTypeTissu () {
    return this.service.getTypeTissu().subscribe((data) => {
      this.SamaTypeTissus = data;
    });
  }

  selectFile(event) {
    this.file = event.target.files.item(0);
  }

  saveTissu(type) {
    this.service.uploadFileTissu({
      "idTissu": 0,
      "nom": type.nom,
        "typeTissu":{
          "idTypeTissu": this.SamaTypeTissuSelected.idTypeTissu
        }
      }, this.file).subscribe((res:any) => {
        if(res.type==4){
          console.log('11111111'+res.body);
          console.log(res.body)
          console.log(res)
          this.SamaTypeTissuSelected.tissus.push((res.body));
        }

        //console.log((<any>res));

      },err => console.error(err)
    );
  }

  getHost() {
    return this.serviceConfig.host();
  }

}
