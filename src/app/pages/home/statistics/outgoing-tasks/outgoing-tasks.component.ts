import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  TaskFetchService,
  TaskStat,
} from '../../../../_services/task-fetch.service';

@Component({
  selector: 'app-outgoing-tasks',
  imports: [],
  templateUrl: './outgoing-tasks.component.html',
  styleUrl: './outgoing-tasks.component.scss',
})
export class OutgoingTasksComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);
  icon!: SafeHtml;
  settingIcon!: SafeHtml;
  private http = inject(HttpClient);
  private taskFetchService = inject(TaskFetchService);

  models: TaskStat[] = [];
  labelMap: Record<string, string> = {
    all: 'Barcha topshiriqlar',
    forExecution: 'Ijroga topshirilgan',
    forReference: 'Maʼlumot uchun',
    expired: 'Muddati oʻtgan',
    forSigning: 'Imzolash uchun',
    inSigning: 'Imzolanyapti',
    forAgreement: 'Kelishuv uchun',
    rejected: 'Rad etilgan',
  };
  ngOnInit(): void {
    this.loadSvg('setting.svg', 'settingIcon');
    this.loadData();
    this.loadSvg('arrow-up-r.svg', 'icon');
  }

  loadData() {
    this.taskFetchService.getTaskStats().subscribe((data) => {
      this.models = data;
    });
  }
  getLabel(label: string): string {
    return this.labelMap[label] || label;
  }
  private loadSvg(filename: string, target: 'icon' | 'settingIcon'): void {
    const path = `images/icons/${filename}`;
    this.http.get(path, { responseType: 'text' }).subscribe((svg) => {
      const safe = this.sanitizer.bypassSecurityTrustHtml(svg);
      this[target] = safe;
    });
  }
}
