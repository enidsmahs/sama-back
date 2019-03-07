import { OnInit, Component } from '@angular/core';
import { ServiceModeleService } from '../../service/service-modele.service';
import {ServicePreferenceService} from '../../service/service-preference.service';
import {ServiceConfigService} from '../../service/service-config.service';
import {Router, Routes} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-sama-modele',
    templateUrl: './sama-modele.component.html',
    styleUrls: ['./sama-modele.component.css']
})


export class SamaModeleComponent implements OnInit {
  files: Array<any>=[];
  indexs; number=[];
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

    samaModeleSelected: any = {
        'idModel': 0,
        'nom': '',
        'date': '',
        'collections': [],
        'ligneModelTissus': [],
        'preferences': []
    };

    constructor (
        private serviceModele: ServiceModeleService,
        private serviceConfig: ServiceConfigService,
        private route : Router
    ) {}

    ngOnInit() {
      this.addImage();
    }

    enregistrerModele(SamaModele) {
        this.SamaModele.nom = SamaModele.modele;
        this.SamaModele.date = SamaModele.date;

       // console.log(this.SamaModele);

        this.serviceModele.setModele(this.SamaModele);
        this.serviceModele.saveModele();
    }


    getHost() {
      return this.serviceConfig.host();
    }
    addNewFile(file: any) {
      let index='tt'+this.files.length;
      this.files.push(index);
      this.files[index]=file;
      return index;
    }

    delelteFile(item){
      let i=this.files.findIndex(function(element,index,array){
        console.log(element);
        console.log(index);
        console.log(item)
        return element==item;
      });
      console.log(i)
      if (i>=0)
        this.files.splice(i,1);
     // this.files[index]=null;
    }

    selectFile(event)
    {
      this.addNewFile(event.target.files.item(0));
    }


    cpt=0;
    public addImage(){
      //bloc
      this.cpt++;
      let bloc_image=document.getElementById('bloc_image');
      let index='tt'+this.files.length;

      //new Bloc image
      let bloc_div=document.createElement('div');
      bloc_div.className="m-2 card bg-success";
      bloc_div.style.maxWidth='9rem';
      //bloc_div.style.maxHeight='15rem';
      //image
      let image= <HTMLElement>document.createElement('img');
      image.style.height='9rem';

      image.className="card-img-top w-100";

      let newInputImage= <HTMLInputElement>document.createElement('input');
      newInputImage.type='file';
      newInputImage.name='image';
      newInputImage.className='p-0 m-0';
      newInputImage.setAttribute('ngModel','');
      newInputImage.id='id_image'+this.cpt;
      newInputImage.style.opacity= '0';
      newInputImage.style.position='absolute';
      newInputImage.style.zIndex='-1';

      let btnDelete= <HTMLInputElement>document.createElement('input');
      btnDelete.type='button';
      btnDelete.value='delete';
      btnDelete.className='btn btn-danger btn-sm w-100 list-group-item';

      let _this=this;
      newInputImage.addEventListener('change',function (e) {
        let index= _this.addNewFile(e.target['files'][0]);
        console.log(e.target['files'][0]);
        var FR= new FileReader();

        FR.addEventListener("load", function(et) {
          image.setAttribute('src', et.target['result']);;
          //console.log(et.target);
          //console.log(et.target['result']);
        });

        FR.readAsDataURL( this.files[0] )
        btnDelete.addEventListener('click',function(ev){
          _this.delelteFile(index);
        },false);
      },false);

      btnDelete.addEventListener('click',function(ev){
        bloc_image.removeChild(bloc_div);
      },false);

      let label_image= document.createElement('label');
      label_image.appendChild(document.createTextNode('ajouter Images'));
      label_image.htmlFor='id_image'+this.cpt;;
      label_image.className="btn  btn-primary btn-sm list-group-item";



      let div_action= <HTMLElement>document.createElement('div');
      div_action.className="card-body p-0 m-0 list-group";




      //ajouter du input et du btn dans le div div_action
      div_action.appendChild(label_image);
      div_action.appendChild(newInputImage);
      div_action.appendChild(btnDelete);

      //ajoute de l'image et du bloc div_action dans bloc_div
      bloc_div.appendChild(image);
      bloc_div.appendChild(div_action);

      //ajoute de notre bloc bloc_div dans le bloc pour l'ajout des images
      bloc_image.appendChild(bloc_div);
    }

     getAllFiles(){
        let files: Array<any> = [];
        for(let index of this.files){
           // console.log('fffffffff');
          //  console.log(index);
          //  console.log(index);
            files.push(this.files[index]);
        }
       // console.log(files)
        return files;
     }

  enregistrerModeleImage(prop) {
    this.serviceModele.uploadFile1({
     'idModel': 0,
     'nom': prop.modele,
     'date': prop.date
    }, this.getAllFiles()).subscribe((res: any) => {
          //alert('modèle enrégisté...');
      this.route.navigate(['/sama-modele']);

     }, err => console.error(err)
    );
  }

}
