import { Routes } from '@angular/router';
import { LoginPage } from './+public/login-page/login-page';
import { PrivateTemplate } from './+private/private-template/private-template';
import { BooksPage } from './+private/books-pages/books-pages';
import { MembersPage } from './+private/members-pages/members-pages';
import { BorrowsPages } from './+private/borrows-pages/borrows-pages';
import { ReportsPage } from './+private/reports-page/reports-page';
import { DashboardPages } from './+private/dashboard-pages/dashboard-pages';

export const routes: Routes = [
{path:'login', component:LoginPage},
{path:'private',component:PrivateTemplate, children:[
{path:'books', component:BooksPage},
{path:'members', component:MembersPage},
{path:'borrows', component:BorrowsPages},
{path:'repords', component:ReportsPage},
{path:'dashboard', component:DashboardPages},
{path:'',redirectTo:'dashboard',pathMatch:'prefix'},
{path:'**',redirectTo:'dashboard'}
]},
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'**',redirectTo:'login'},

];
