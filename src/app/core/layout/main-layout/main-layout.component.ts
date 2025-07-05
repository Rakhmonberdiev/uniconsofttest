import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { RightSidebarComponent } from '../../right-sidebar/right-sidebar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [
    SidebarComponent,
    NavbarComponent,
    RouterOutlet,
    RightSidebarComponent,
    NgClass,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  sidebarCollapsed = false;
  onToggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
