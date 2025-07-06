import { Component, inject, input, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-document-card',
  imports: [],
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.scss',
})
export class DocumentCardComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);
  icon = input<string>();
  label = input<string>();
  count = input<number>();
  safeIconUrl!: SafeHtml;

  ngOnInit(): void {
    this.safeIconUrl = this.sanitizer.bypassSecurityTrustHtml(
      this.icon() ?? ''
    );
  }
}
