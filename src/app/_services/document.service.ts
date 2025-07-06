import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { DocumentStaticsModel } from '../pages/home/statistics/doc-stat-icons';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl + 'documents/';

  getDocumentStatistics() {
    return this.http.get<DocumentStaticsModel[]>(this.baseUrl + 'statistics', {
      withCredentials: true,
    });
  }
}
