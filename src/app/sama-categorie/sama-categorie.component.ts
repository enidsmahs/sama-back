import { Component, OnInit } from '@angular/core';
import { ServiceCategorieService } from '../../service/service-categorie.service';
import { Categorie } from '../model/model.categorie';

@Component({
  selector: 'app-sama-categorie',
  templateUrl: './sama-categorie.component.html',
    styleUrls: ['./sama-categorie.component.css']
})
export class SamaCategorieComponent implements OnInit {

  SamaCategorie: Categorie = new Categorie();
  methodeSave : boolean = false;


  mesCategories = {
    idCategorie: 0,
    nom: null,
    date: null
  };

  categorieSelected: any = {
    idCategorie: 0,
    nom: null,
    date: null
  };

  SamaListeCategorie = [];

  lengthCollection =0;

  samaCategorieSelected: any = {
    idCategorie: 0,
    nom: null,
    date: null
  };

  constructor(private categorieService: ServiceCategorieService) {}

  ngOnInit() {
    this.getAllCategorie();
  }

  showClick(cate: any) {
    this.samaCategorieSelected = cate;

    this.contextUpdate();
  }
  getAllCategorie() {
    this.categorieService.getAllCategorie().subscribe(
      (data:Array<any>) => {
        this.SamaListeCategorie = data;
        console.log(this.SamaListeCategorie)
      },
      err => {
        console.log(err);
      }
    );
  }





  saveCategorie() {
    if(this.methodeSave ===  false){
      this.categorieService.saveCategorie(this.SamaCategorie).subscribe(
        (res) => {
          this.SamaListeCategorie.push(res);
          this.samaCategorieSelected = res;
          this.onclickUpdateCategorie(res)
        },
        err => console.error(err)
      );
    }
    else{
      this.categorieService.saveCategorie(this.SamaCategorie).subscribe(
        (res) => {
          this.updateTabCategorieById(res['idCategorie'],res);
          this.contextUpdate();
        },
        err => console.error(err)
      );
    }
  }
  contextAdd(){
    let titre_save = document.getElementById('titre_type_save');
    titre_save.innerHTML = 'Ajouter Nouvelle Categorie';
    let btn_save = document.getElementById('btn_type_save');
    btn_save.innerHTML = 'Ajouter';
    this.SamaCategorie = new Categorie();
    this.methodeSave = false;
  }
  contextUpdate(){
    let titre_save = document.getElementById('titre_type_save');
    titre_save.innerHTML = this.samaCategorieSelected.nom;
    let btn_save = document.getElementById('btn_type_save');
    btn_save.innerHTML = 'save';
    this.methodeSave = true;
    this.clone(this.samaCategorieSelected, this.SamaCategorie);
    if(this.samaCategorieSelected.collections)
      this.lengthCollection= this.samaCategorieSelected.collections.length;
    else
      this.lengthCollection = 0;
  }
  deleteCategorie(id) {
    this.categorieService.deleteCategorie(id).subscribe(
      (res) => {
       // alert('catégorie supprimmée...');
        if(res == true){
          console.log("suppresion effectué au niveau de la BD")
          console.log(id);
          this.deleteInTableau(id);
        }
        let modal= document.getElementById('exampleModal');
        modal.style.display='none';
        this.contextAdd();
      },
      err => console.error(err)
    );
  }

  deleteInTableau(id){
    console.log('non problem 1');
    const index = this.getIndexTabById(id);
    console.log('non problem 2');
    if(index >= 0){
      this.SamaListeCategorie.splice(index, 1);
    }
    console.log('non problem 3');
  }

  onclickUpdateCategorie(cat: any){
    this.clone(cat, this.SamaCategorie);
    this.contextUpdate();
  }


  updateTabCategorieById(id: number, cat: any){
    const index = this.getIndexTabById(id);
    if(index >= 0){
      this.clone(cat, this.SamaListeCategorie[index]);
    }
  }

  clone(source: any,target: any){
    for (let at in source){
      target[at] = source[at];
    }
  }

  getIndexTabById(id: number){
    const index = this.SamaListeCategorie.findIndex(
      (s) => {
        return s.idCategorie === id;
      }
    );
    return index;
  }

  getElementTabById(id: number){
    const index = this.getIndexTabById(id);
    if(index >= 0){
      return this.SamaListeCategorie[index];
    }
  }
}
