import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceTissuService {

    tissu: any;

    setTissu(tissu) {
        this.tissu = tissu;
    }

    constructor(private http: HttpClient) { }


    saveTissu() {
        return this.http.post('http://192.168.1.123:8080/saveTissu', this.tissu).subscribe(
            (res) => {
                alert('preference enrégistrée...');
            },
            err => {
                console.log('Error');
            });
    }

    getTissu() {
      return this.http.get('http://192.168.1.123:8080/getAllTissu').map(data => data);
    }

}
