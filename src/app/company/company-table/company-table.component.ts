import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent implements OnInit {
  @Input() companiesList: Company[];
  @Output() deleteCompanyEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
