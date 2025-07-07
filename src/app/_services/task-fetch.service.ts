import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
export interface DeadlineStatDto {
  label: string;
  count: number;
}

export interface TaskTypeStatDto {
  type: 'Signing' | 'Reference' | 'Agreement' | 'Control';
  count: number;
}
@Injectable({
  providedIn: 'root',
})
export class TaskFetchService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl + 'api/tasks/';

  getDeadlineStatistics() {
    return this.http.get<DeadlineStatDto[]>(
      `${this.baseUrl}incoming/deadline-statistics`,
      { withCredentials: true }
    );
  }

  getTaskTypeStatistics() {
    return this.http.get<TaskTypeStatDto[]>(
      `${this.baseUrl}incoming/statistics`,
      {
        withCredentials: true,
      }
    );
  }
}
