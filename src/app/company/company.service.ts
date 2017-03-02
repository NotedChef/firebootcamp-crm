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
      .catch(this.errorHandler); // must remember to import map operator from rxjs/Rx
  }

  private errorHandler(error) {
      console.error('CUSTOM ERROR', error);
      return Observable.throw(error);
  }

  deleteCompany(companyId: number) {
     return this.http.delete(`${this.API_BASE}/company/${companyId}`)
     .map(data => data.json());
  }

}
