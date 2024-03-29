import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { SettingsGuardGuard } from './settings-guard.guard';

const routes: Routes = [
  {
    path: 'loans',
    component: LoansComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'add',
    component: AddLoanComponent,
    outlet: 'addLoan',
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'product/:productId/photos/:photoId',
    component: ProductComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'clients', //by default root ==> clients path component
    pathMatch: 'full', //full ==> exact match
  },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {
    path: 'settings',
    canLoad: [SettingsGuardGuard],
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
