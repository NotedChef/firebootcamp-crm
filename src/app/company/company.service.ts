import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Company } from './company';

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

  addCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.API_BASE}/company`, JSON.stringify(company), options)
      .map(response => response.json())
      .catch(this.errorHandler); // must remember to import map operator from rxjs/Rx
  }

  updateCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.API_BASE}/company/${company.id}`, JSON.stringify(company), options)
      .map(response => response.json())
      .catch(this.errorHandler); // must remember to import map operator from rxjs/Rx
  }

  getCompany(companyId: number) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.API_BASE}/company/${companyId}`, options)
      .map(response => response.json())
      .catch(this.errorHandler); // must remember to import map operator from rxjs/Rx
  }

}
