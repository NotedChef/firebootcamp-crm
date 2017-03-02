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
    .subscribe(companies => this.companies = companies);
  }
}
