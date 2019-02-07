import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServiceTypeTissuService {

    typeTissu: any;

    setTypeTissu(typeTissu) {
        this.typeTissu = typeTissu;
    }

    constructor(private http: HttpClient) { }


    saveTypeTissu() {
        return this.http.post('http://192.168.1.114:8080/saveTypeTissu', this.typeTissu).subscribe(
            (res) => {
                alert('preference enrégistrée...');
            },
            err => {
                console.log('Error');
            });
    }

    getTypeTissu() {
      return this.http.get('http://192.168.1.114:8080/getAllTypeTissu').map(data => data);
    }

    saveTissu(tissu: any) {
      return this.http.post('http://192.168.1.114:8080/saveTissu', tissu).map(res => res);
    }

    uploadFileTissu(tissu: any, file: File): Observable<HttpEvent<{}>> {
      const formdata: FormData=new FormData();
      formdata.append('file',file);
      formdata.append('propriete', new Blob([JSON.stringify(tissu)], {
        type: 'application/json'
      }));
      const req= new HttpRequest('POST','http://192.168.1.114:8080/saveTissuImage',formdata,{
        reportProgress:false,

      });
      return this.http.request(req);
    }

    deleteTissu (id: number) {
      return this.http.delete('http://192.168.1.114:8080/deleteTissu/' + id).subscribe(
        (res) => {
          alert('tissu supprimmé...');
        },
        err => console.error(err)
      );
    }

    updateTissu() {

    }
}
