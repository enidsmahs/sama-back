import {Component, Input, OnInit} from '@angular/core';
import {ServiceModeleService} from '../../../service/service-modele.service';
import {ServiceConfigService} from '../../../service/service-config.service';
import {ServiceCollectionService} from '../../../service/service-collection.service';
import {ServiceTypeTissuService} from '../../../service/service-type-tissu.service';
import {ServicePreferenceService} from '../../../service/service-preference.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sama-liste-modele',
  templateUrl: './sama-liste-modele.component.html',
  styleUrls: ['./sama-liste-modele.component.css']
})
export class SamaListeModeleComponent implements OnInit {


  constructor(
    private serviceModele: ServiceModeleService,
    private serviceConfig: ServiceConfigService,
    private serviceCollection: ServiceCollectionService,
    private serviceTissu: ServiceTypeTissuService,
    private servicePreference: ServicePreferenceService,
    private route: Router,
    private fb: FormBuilder
  ) {

  }

  add = false;

  SamaModeles: any;

  SamaModele = {
    'idModel': 0,
    'nom': '',
    'date': '',
    'collections': [],
    'ligneModelTissus': [],
    'preferences': []
  };

  @Input()
  samaModeleSelected: any = {
    'idModel': 0,
    'nom': '',
    'date': '',
    'collections': [],
    'ligneModelTissus': [],
    'preferences': []
  };

  collections: Array<any> = [];
  ligneModelTissus: Array<any> = [];
  preferences: Array<any> = [];

  ngOnInit(): void {
    this.getAllModele();
    this.getAllCollection();
    this.getAllPreference();
    this.getAllTissu();

  }

  getAllModele() {
    this.serviceModele.getModele()
      .subscribe(res => {
          this.SamaModeles = res;
        },
        err => {
          console.log(err);
        })
  }

  getAllCollection() {
    this.serviceCollection.getAllCollection()
      .subscribe((res: Array<any>) => {
          this.collections = res;
        },
        err => {
          console.log(err);
        })
  }

  getAllPreference() {
    this.servicePreference.getPreference()
      .subscribe((res: Array<any>) => {
          this.preferences = res;
          for (let pref of this.preferences) {
            for (let prop of pref.proprietes) {
              prop.selected = false;
              //  console.log(prop);
            }
          }
        },
        err => {
          console.log(err);
        });
  }

  getAllTissu() {
    this.serviceTissu.getTypeTissu()
      .subscribe((res: Array<any>) => {
          this.ligneModelTissus = res;
        },
        err => {
          console.log(err);
        })
  }

  showClick(modele: any) {
    this.refreshCollection();
    this.samaModeleSelected = modele;
    this.tabCollection = this.samaModeleSelected.collections;
    this.tabPreference = this.samaModeleSelected.preferences;
    this.tabTissu = this.samaModeleSelected.ligneModelTissus;
  }

  refreshCollection() {
    for (let collection of this.tabCollectionRemoved){
      this.tabCollection.push(collection);
    }
  }

  setAdd(test1) {
    this.add = test1;
  }

  getHost() {
    return this.serviceConfig.host();
  }

  deleteModele(samaModeleSelected) {
    this.serviceModele.deleteModele(samaModeleSelected).subscribe(
      (res) => {
        alert('modèle supprimmé...');
        //this.samaModeleSelected = res;
      },
      err => console.error(err)
    );
  }

  tabCollection: Array<any> = [];

  recupCollection(sa) {
    let j = 0;
    for (let i of this.collections) {
      if (i.idCollection == sa.sama_collection) {
        this.tabCollection.push(i);
        break;
      }
      j++;
    }

    this.collections.splice(j, 1);
    console.log(this.collections)
    console.log(this.tabCollection);
    /*  console.log(sa);
     let tabCollection: Array<any> = [];

     for (let a of this.collections) {
      if (sa === a.idCollection) {
          tabCollection.push(a);
          console.log(tabCollection);
       }
     }
     */
  }

  tabPreference: Array<any> = [];

  affichePreference(pre) {
    let j = 0;
    if (pre != 0) {
      for (let i of this.preferences) {
        console.log(i.idPreference + ' ' + pre.sama_preference)
        if (i.idPreference == pre.sama_preference) {
          this.tabPreference.push(i);
          break;
        }
        j++;
      }
      this.preferences.splice(j, 1);
    }
  }

  tabTissu: Array<any> = [];
  recupTypeTissu(sa) {
    let j = 0;
    for (let i of this.ligneModelTissus) {
      console.log(i.idTypeTissu +" "+sa.sama_tissu)
      if (i.idTypeTissu == sa.sama_tissu) {
        let tt ={
          idLigneTypeTissu : 0,
          typeTissu : i
        }
        this.tabTissu.push(tt);
        break;
      }
      j++;
    }

    this.ligneModelTissus.splice(j, 1);;
    /*  console.log(sa);
     let tabCollection: Array<any> = [];

     for (let a of this.collections) {
      if (sa === a.idCollection) {
          tabCollection.push(a);
          console.log(tabCollection);
       }
     }
     */
  }

  saveCollection() {
    this.serviceModele.saveCollections(this.samaModeleSelected.idModel,
      {
        'collections': this.tabCollection
      }
    ).subscribe((res: any) => {
      //
      //console.log(res.body);
     console.log(res);
      this.tabCollectionRemoved=[];
      this.samaModeleSelected.collections = res;
      this.tabCollection = res;
      // console.log((<any>res));
    }, err => console.error(err));
  }

  saveTypeTissu() {
    let tab = [];
    for (let tissu of this.tabTissu) {
      tab.push(tissu);
    }
    console.log(tab);
    this.serviceModele.saveTissu(this.samaModeleSelected.idModel,
      {
        'ligneModelTissus': tab
      }
    ).subscribe((res: any) => {
      //
      console.log(res);
      this.samaModeleSelected.ligneModelTissus = res;
      this.tabTissu = res;
      // console.log((<any>res));
    }, err => console.error(err));
  }


  savePropriete(prop) {
    let tabPropsActive: Array<any> = [];
    for (let a of this.tabPreference) {
      for (let b of a.proprietes) {
        if (b.selected === true) {
          tabPropsActive.push(b);
        }
      }
    }
    console.log(tabPropsActive);
    this.serviceModele.savePreference(this.samaModeleSelected.idModel,
      {
        'proprietes': tabPropsActive
      }).subscribe((res: any) => {

      this.samaModeleSelected.preferences = res;
      // this.tabPreference=res;
    }, err => console.error(err));
  }

  tabCollectionRemoved=[];
  removeOneCollection(i) {
    console.log(i);
    console.log(this.samaModeleSelected.collections);
    this.tabCollectionRemoved.push(this.tabCollection[i]);
//    this.samaModeleSelected.collections.splice(i, 1);
    this.tabCollection.splice(i, 1);
  }

  tabTissuRemoved=[];
  removeOneTissu(i) {

  }
}
