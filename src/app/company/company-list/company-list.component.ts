import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  //companies$: Observable<Company[]>;
  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    // initialises the Companies
    // this.companies$ = this.companyService.getCompanies(); 
    // when have an observable put $ on it
    this.companyService.getCompanies()
    .subscribe( (companies) =>  { return this.companies = companies; });
    // .subscribe(companies => return this.companies = companies);
    // subscribe takes a callback function as a parameter.  Pass companies as a parameter to the callback function
  }

  deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId)
    .subscribe(() => this.getCompanies());

  }
}

// companies => this.companies = companies
// (companies) => { return this.companies = companies }
// function (companies) { return this.companies = companies }
