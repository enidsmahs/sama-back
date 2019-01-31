import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceTypeTissuService {

    typeTissu: any;

    setTypeTissu(typeTissu) {
        this.typeTissu = typeTissu;
    }

    constructor(private http: HttpClient) { }


    saveTypeTissu() {
        return this.http.post('http://192.168.1.123:8080/saveTypeTissu', this.typeTissu).subscribe(
            (res) => {
                alert('preference enrégistrée...');
            },
            err => {
                console.log('Error');
            });
    }

    getTypeTissu() {
      return this.http.get('http://192.168.1.123:8080/getAllTypeTissu').map(data => data);
    }

    saveTissu(tissu: any) {
      return this.http.post('http://192.168.1.123:8080/saveTissu', tissu).map(res => res);
    }
}
