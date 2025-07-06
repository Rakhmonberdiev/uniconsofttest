import { Component, HostListener, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';
import { LoginIllustrationComponent } from '../../../shared/login-illustration/login-illustration.component';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, LoginIllustrationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error: string | null = null;
  isQrMode = true;
  isMobile = false;
  private fb = inject(FormBuilder);
  authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
      return;
    }
    this.updateDeviceMode();
    this.initForm();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateDeviceMode();
  }
  updateDeviceMode() {
    this.isMobile = window.innerWidth < 768;
  }
  toggleMode() {
    this.isQrMode = !this.isQrMode;
  }
  initForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.isQrMode) return;
    if (this.form.invalid) return;
    this.error = null;
    const { username, password } = this.form.value;
    this.authService.login(username, password).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error?.message || 'Ошибка входа';
      },
    });
  }
}
