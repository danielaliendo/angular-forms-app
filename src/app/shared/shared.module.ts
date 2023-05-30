import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    SideMenuComponent
  ]
})

export class SharedModule {}
