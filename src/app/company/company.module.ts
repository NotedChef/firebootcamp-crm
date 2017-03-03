import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import { CompanyService } from './company.service';
import { companyRoutes } from './company.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(companyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent
  ],
  providers: [CompanyService],
})
export class CompanyModule { }
