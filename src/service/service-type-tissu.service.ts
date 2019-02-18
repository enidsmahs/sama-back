import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ServiceConfigService} from './service-config.service';

@Injectable()
export class ServiceTypeTissuService {

    typeTissu: any;

    setTypeTissu(typeTissu) {
        this.typeTissu = typeTissu;
    }

    constructor(private http: HttpClient, private url: ServiceConfigService) { }


    saveTypeTissu() {
        return this.http.post(this.url.host()+'/saveTypeTissu', this.typeTissu);
    }

    getTypeTissu() {
      return this.http.get(this.url.host()+'/getAllTypeTissu').map(data => data);
    }

    saveTissu(tissu: any) {
      return this.http.post(this.url.host()+'/saveTissu', tissu);
    }

    uploadFileTissu(tissu: any, file: File): Observable<HttpEvent<{}>> {
      const formdata: FormData=new FormData();
      formdata.append('file',file);
      formdata.append('propriete', new Blob([JSON.stringify(tissu)], {
        type: 'application/json'
      }));
      const req= new HttpRequest('POST',this.url.host()+'/saveTissuImage',formdata,{
        reportProgress:false,

      });
      return this.http.request(req);
    }

    deleteTissu (id: number) {
      return this.http.delete(this.url.host()+'/deleteTissu/' + id);
    }

    updateTissu(id: number, tissu: any) {
      return this.http.put(this.url.host()+'/updateTissu/' + id, tissu).subscribe(
        (res) => {
          alert('tissu modifié...');
        },
        err => console.error(err)
      );
    }
}
