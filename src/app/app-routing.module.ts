import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AddCustomersComponent } from './modules/customers/components/add-customers/add-customers.component';
import { ListCustomersComponent } from './modules/customers/components/list-customers/list-customers.component';

const routes: Routes = [
  { path: 'clientes/cadastrar', component: AddCustomersComponent },
  { path: 'clientes/listar', component: ListCustomersComponent },
  { path : '', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
