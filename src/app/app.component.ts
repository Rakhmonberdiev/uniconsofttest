import { Component, inject, OnInit } from '@angular/core';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { AuthService } from './_services/auth.service';
import { LoginComponent } from './pages/auth/login/login.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.loadUser();
  }
}
