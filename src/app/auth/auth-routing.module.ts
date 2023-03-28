import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {

  }
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AuthRoutingModule { }
