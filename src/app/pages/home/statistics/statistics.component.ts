import { Component, inject, OnInit } from '@angular/core';
import { DocumentCardComponent } from '../../../shared/document-card/document-card.component';
import {
  docsvgIcons,
  DocumentStaticsModel,
  documentTypeLabels,
} from './doc-stat-icons';
import { DocumentService } from '../../../_services/document.service';

@Component({
  selector: 'app-statistics',
  imports: [DocumentCardComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent implements OnInit {
  documents: DocumentStaticsModel[] = [];
  docsvgIcons = docsvgIcons;
  documentTypeLabels = documentTypeLabels;

  private documentService = inject(DocumentService);
  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments() {
    this.documentService.getDocumentStatistics().subscribe((data) => {
      this.documents = data;
    });
  }
}
