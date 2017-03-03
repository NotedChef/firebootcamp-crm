import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

export const companyRoutes: Routes = [
    {path: 'company/list', component: CompanyListComponent},
    {path: 'company/edit/:id', component: CompanyEditComponent},
]