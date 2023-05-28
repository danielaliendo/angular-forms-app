import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterPageComponent} from "./pages/register-page/register-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sing-up',
        component: RegisterPageComponent
      },
      {
        path: '**',
        redirectTo: 'sing-up'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
