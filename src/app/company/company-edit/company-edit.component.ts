import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  companyId: any;
  isNewCompany: boolean;
  companyForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router) { }

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = this.companyId === 'new';
    this.buildForm();
    if (!this.isNewCompany) {
      this.getCompany();
    }
  }

  buildForm() { // create in memory model of what company form looks like
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['']
    });
  }

  saveCompany() {
    if (this.isNewCompany) {
      this.companyService.addCompany(this.companyForm.value)
        .subscribe(() => this.router.navigateByUrl('/company/list'));
    } else {
      const newCompany = Object.assign({}, {id: this.companyId}, this.companyForm.value);
      this.companyService.updateCompany(newCompany)
        .subscribe(() => this.router.navigateByUrl('/company/list'));
    }
  }

  getCompany() {
    this.companyService.getCompany(this.companyId)
    .subscribe(
      company => {
        this.companyForm.patchValue(company);
      }
    )
  }


}
