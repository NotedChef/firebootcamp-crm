import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { Error404Component } from './404/404.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'company/list', pathMatch: 'full'},
    {path: 'company/list', component: CompanyListComponent},
    {path: 'company/edit/:id', component: CompanyEditComponent},
    {path: '**', component: Error404Component}
];
