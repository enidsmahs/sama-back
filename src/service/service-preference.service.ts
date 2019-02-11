import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ServiceConfigService} from './service-config.service';

@Injectable()
export class ServicePreferenceService {

    preference: any;

    setPreference(preference) {
        this.preference = preference;
    }

    constructor(private http: HttpClient, private url: ServiceConfigService) { }


    savePreference() {
        return this.http.post('/savePreference', this.preference).subscribe(
            (res) => {
                alert('preference enrégistrée...');
            },
            err => {
                console.log('Error');
            });
    }

    getPreference() {
        return this.http.get(this.url.host()+'/getAllPreference').map(data => data);
    }

    savePropriete(propriete: any) {
      return this.http.post(this.url.host()+'/savePropriete', propriete).map(res => res);
    }

    uploadFile1(propriete: any, file: File): Observable<HttpEvent<{}>> {
      const formdata: FormData=new FormData();
      formdata.append('file',file);
      formdata.append('propriete', new Blob([JSON.stringify(propriete)], {
        type: 'application/json'
    }));
      const req= new HttpRequest('POST',this.url.host()+'/saveProprieteImage',formdata,{
          reportProgress:false,

      });
      return this.http.request(req);
    }


    saveProprieteImage(propriete: any, image: File) {
      const formData: FormData = new FormData();
      formData.append('propriete', propriete);
      formData.append('image', image);
      return this.http.post('http://192.168.1.114:8080/', formData).map(res => res);
    }

    deletePreference (id: number) {
      return this.http.get(this.url.host()+'/deletePreference/' + id).subscribe(
        (res) => {
          alert('préférence supprimmée...');
        },
        err => console.error(err)
      );
    }

    updatePreference() {

    }
}
