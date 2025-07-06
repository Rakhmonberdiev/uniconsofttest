import { Component, inject, OnInit } from '@angular/core';
import { sidebarIcons } from './sidebar-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SIDEBAR_NAV_DATA } from './sidebar-data';
import { MenuItem } from './sidebar-nav-model';
import { DocumentService } from '../../_services/document.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  sections = SIDEBAR_NAV_DATA;
  safeIcons = new Map<keyof typeof sidebarIcons, SafeHtml>();
  private sanitizer = inject(DomSanitizer);
  private documentService = inject(DocumentService);
  expanded = new Set<string>();
  createOpen = false;
  createOptions = [
    {
      label: 'Hujjat A',
      action: () => this.createTestDoc('President'),
    },
    {
      label: 'Hujjat C',
      action: () => this.createTestDoc('MinisterCabinet'),
    },
    {
      label: 'Hujjat B',
      action: () => this.createTestDoc('GovernmentCommission'),
    },
  ];
  ngOnInit(): void {
    for (const key of Object.keys(sidebarIcons) as Array<
      keyof typeof sidebarIcons
    >) {
      this.safeIcons.set(
        key,
        this.sanitizer.bypassSecurityTrustHtml(sidebarIcons[key])
      );
    }
  }
  toggle(item: MenuItem) {
    if (!item.children) return;
    if (this.expanded.has(item.route)) this.expanded.delete(item.route);
    else this.expanded.add(item.route);
  }
  isExpanded(item: MenuItem): boolean {
    return this.expanded.has(item.route);
  }
  toggleCreate() {
    this.createOpen = !this.createOpen;
  }

  selectCreate(opt: { label: string; action: () => void }) {
    this.createOpen = false;
    opt.action();
  }

  createTestDoc(type: string) {
    this.documentService.postDocument(type).subscribe({
      next: () => {},
      error: (err) => {
        console.error('ошибка:', err);
      },
    });
  }
}
