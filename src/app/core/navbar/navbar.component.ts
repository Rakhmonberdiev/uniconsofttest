import { Component, inject, OnDestroy, OnInit, output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { interval, Subscription } from 'rxjs';
import { navbarSvgIcons } from './navbar-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  currentTime = '';
  private sub!: Subscription;
  searchIcon!: SafeHtml;
  galleryIcon!: SafeHtml;
  eyeIcon!: SafeHtml;
  focusIcon!: SafeHtml;
  gridIcon!: SafeHtml;
  arrowIcon!: SafeHtml;
  isLangOpen = false;
  languages = [
    { code: 'uz', label: "O'zbekcha", flag: 'images/icons/uz.svg' },
    { code: 'ru', label: 'Русский', flag: 'images/icons/uz.svg' },
    { code: 'en', label: 'English', flag: 'images/icons/uz.svg' },
  ];
  selected = this.languages[0];
  private sanitizer = inject(DomSanitizer);

  toggleSidebar = output();
  ngOnInit(): void {
    this.currentTime = this.getFormattedTime();
    this.sub = interval(1000).subscribe(() => {
      this.currentTime = this.getFormattedTime();
    });
    this.searchIcon = this.sanitizer.bypassSecurityTrustHtml(
      navbarSvgIcons.search
    );
    this.galleryIcon = this.sanitizer.bypassSecurityTrustHtml(
      navbarSvgIcons.gallery
    );
    this.eyeIcon = this.sanitizer.bypassSecurityTrustHtml(navbarSvgIcons.eye);
    this.focusIcon = this.sanitizer.bypassSecurityTrustHtml(
      navbarSvgIcons.focus
    );
    this.gridIcon = this.sanitizer.bypassSecurityTrustHtml(navbarSvgIcons.grid);
    this.arrowIcon = this.sanitizer.bypassSecurityTrustHtml(
      navbarSvgIcons.chevronDown
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  toggleLang() {
    this.isLangOpen = !this.isLangOpen;
  }
  selectLang(lang: { code: string; label: string; flag: string }) {
    this.selected = lang;
    this.isLangOpen = false;
  }
  private getFormattedTime(): string {
    return new Date().toTimeString().slice(0, 5);
  }
}
