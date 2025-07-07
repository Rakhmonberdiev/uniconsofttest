import { Component } from '@angular/core';
import { ExecutionDeadlineChartComponent } from '../../../../shared/execution-deadline-chart/execution-deadline-chart.component';
import { WeeklyDocumentChartComponent } from '../../../../shared/weekly-document-chart/weekly-document-chart.component';
import { IncomingTaskStatComponent } from '../../../../shared/incoming-task-stat/incoming-task-stat.component';

@Component({
  selector: 'app-incoming-tasks',
  imports: [
    WeeklyDocumentChartComponent,
    ExecutionDeadlineChartComponent,
    IncomingTaskStatComponent,
  ],
  templateUrl: './incoming-tasks.component.html',
  styleUrl: './incoming-tasks.component.scss',
})
export class IncomingTasksComponent {}
