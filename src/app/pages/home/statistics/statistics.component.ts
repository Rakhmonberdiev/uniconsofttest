import { Component, inject, OnInit } from '@angular/core';
import { DocumentCardComponent } from '../../../shared/document-card/document-card.component';
import {
  docsvgIcons,
  DocumentStaticsModel,
  documentTypeLabels,
} from './doc-stat-icons';
import { DocumentService } from '../../../_services/document.service';
import { DocumentSignalService } from '../../../_services/document-signal.service';

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
  private documentSignalService = inject(DocumentSignalService);
  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments() {
    this.documentService.getDocumentStatistics().subscribe((data) => {
      this.documents = data;
      this.documentSignalService.startConnection(
        this.onDocumentUpdated.bind(this)
      );
    });
  }
  onDocumentUpdated(type: string, count: number): void {
    const item = this.documents.find((d) => d.type === type);
    if (item) {
      item.count = count;
    } else {
      this.documents.push({
        type: type as DocumentStaticsModel['type'],
        count,
      });
    }
  }
}
