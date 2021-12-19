import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IsAuthGuard } from '../is-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [IsAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [IsAuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthRoutingModule { }
