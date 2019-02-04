import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServicePreferenceService {

    preference: any;

    setPreference(preference) {
        this.preference = preference;
    }

    constructor(private http: HttpClient) { }


    savePreference() {
        return this.http.post('http://192.168.1.123:8080/savePreference', this.preference).subscribe(
            (res) => {
                alert('preference enrégistrée...');
            },
            err => {
                console.log('Error');
            });
    }

    getPreference() {
        return this.http.get('http://192.168.1.114:8080/getAllPreference').map(data => data);
    }

    savePropriete(propriete: any) {
      return this.http.post('http://192.168.1.114:8080/savePropriete', propriete).map(res => res);
    }

    uploadFile1(propriete: any, file: File): Observable<HttpEvent<{}>> {
      const formdata: FormData=new FormData();
      formdata.append('file',file);
      formdata.append('propriete', new Blob([JSON.stringify(propriete)], {
        type: 'application/json'
    }));
      const req= new HttpRequest('POST','http://192.168.1.114:8080/saveProprieteImage',formdata,{
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
}
