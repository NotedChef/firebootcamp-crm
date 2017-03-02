import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';


  constructor(private http: Http) { }



  getCompanies() {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.API_BASE}/company`, options)
      .map(response => response.json())
      .catch(this.errorHandler); //must remember to import map operator from rxjs/Rx
      
    // return Observable.of(
    //  [
    //   {name: 'company 1', email: 'email 1', phone: 111},
    //   {name: 'company 2', email: 'email 2', phone: 211},
    //   {name: 'company 3', email: 'email 3', phone: 311}
    // ]);
  }

  private errorHandler(error) {
      console.error('CUSTOM ERROR', error);
      return Observable.throw(error);
  }

}
