import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {forEach} from '@angular/router/src/utils/collection';
import {ServiceConfigService} from './service-config.service';

@Injectable()
export class ServiceModeleService {

  modele: any;

  setModele(modele) {
    this.modele = modele;
  }

  constructor(private http: HttpClient, private url: ServiceConfigService) { }

  saveModele() {
    return this.http.post(this.url.host()+'/saveModele', this.modele);
  }

  getModele() {
    return this.http.get(this.url.host() + '/getAllModele').map(res => res);
  }
  getModeleById (id: number) {
    return this.http.get(this.url.host()+'/getModeleById/' + id);
  }
  uploadFile1(modele: any, files: File[]): Observable<HttpEvent<{}>> {
    const formdata: FormData=new FormData();
    for (let file of files) {
      // console.log('defvzfvevc');
      formdata.append('images', file);
    }
    formdata.append('modele', new Blob([JSON.stringify(modele)], {
      type: 'application/json'
    }));
    const req= new HttpRequest('POST',this.url.host() + '/saveModeleImage',formdata,{
      reportProgress:true,
    });
    return this.http.request(req);
  }

  deleteModele (id: number) {
    return this.http.delete(this.url.host() + '/deleteModele/' + id);
  }

  saveCollections(idModel: number, collection: any) {
    return this.http.post(this.url.host()+'/'+idModel+'/collections', collection);
  }

  savePreference(idModel: number, pref: any) {
    return this.http.post(this.url.host()+'/'+idModel+'/preferences', pref);
  }

  saveTissu(idModel: number, tissu: any) {
    return this.http.post(this.url.host()+'/'+idModel+'/typeTissus', tissu);
  }

  deleteImage(id ){
    console.log(id)
    return this.http.delete(this.url.host() + '/deleteImageModele/' + id);
  }
  addImage(idModel :number,file):Observable<HttpEvent<{}>> {
    const formdata: FormData=new FormData();
    console.log('file')
    console.log(file);
    formdata.append('image', file);
    const req= new HttpRequest('POST',this.url.host()+'/'+idModel+'/addImage',formdata,{
      reportProgress:true,
    });
    return this.http.request(req);
  }

}
