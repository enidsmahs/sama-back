import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
        return this.http.get('http://192.168.1.123:8080/getAllPreference').map(data => data);
    }

    savePropriete(propriete: any) {
      return this.http.post('http://192.168.1.123:8080/savePropriete', propriete).map(res => res);
    }
}
