import { Component, inject, OnInit } from '@angular/core';
import { rightSidebarIcons } from './right-sidebar-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface RightSidebarItem {
  iconKey: keyof typeof rightSidebarIcons;
  route?: string;
  tooltip: string;
}
@Component({
  selector: 'app-right-sidebar',
  imports: [RouterLink],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss',
})
export class RightSidebarComponent implements OnInit {
  items: RightSidebarItem[] = [
    {
      iconKey: 'notifications',
      tooltip: 'Bildirishnomalar',
      route: '/notifications',
    },
    { iconKey: 'calendar', tooltip: 'Kalendar', route: '/calendar' },
    { iconKey: 'contact', tooltip: 'Kontaktlar', route: '/contacts' },
    { iconKey: 'bufer', tooltip: 'Saqlangan malumotlar', route: '/buffer' },
    { iconKey: 'help', tooltip: 'Yordam', route: '/help' },
    { iconKey: 'messages', tooltip: 'Meet', route: '/meet' },
  ];
  safeIcons = new Map<keyof typeof rightSidebarIcons, SafeHtml>();
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    for (const key of Object.keys(rightSidebarIcons) as Array<
      keyof typeof rightSidebarIcons
    >) {
      this.safeIcons.set(
        key,
        this.sanitizer.bypassSecurityTrustHtml(rightSidebarIcons[key])
      );
    }
  }
}
