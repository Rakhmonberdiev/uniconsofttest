import { Component, OnDestroy, OnInit } from '@angular/core';
import { LOGIN_ILLUSTRATION_DATA } from './login-illustration-data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login-illustration',
  imports: [NgClass],
  templateUrl: './login-illustration.component.html',
  styleUrl: './login-illustration.component.scss',
})
export class LoginIllustrationComponent implements OnInit, OnDestroy {
  slides = LOGIN_ILLUSTRATION_DATA;
  currentIndex = 0;
  private intervalId!: number;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  }
  ngOnDestroy(): void {
    window.clearInterval(this.intervalId);
  }
  selectSlide(i: number) {
    this.currentIndex = i;
  }
}
