import { Component, inject } from '@angular/core';
import {
  TaskFetchService,
  TaskTypeStatDto,
} from '../../_services/task-fetch.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-incoming-task-stat',
  imports: [NgClass],
  templateUrl: './incoming-task-stat.component.html',
  styleUrl: './incoming-task-stat.component.scss',
})
export class IncomingTaskStatComponent {
  taskStats: (TaskTypeStatDto & { svg?: SafeHtml })[] = [];
  labelMap: Record<string, { label: string; bgColor: string }> = {
    Signing: {
      label: 'Imzolash uchun',
      bgColor: 'bg-[#B9E6FE]',
    },
    Reference: {
      label: 'Rezyolyutsiya',
      bgColor: 'bg-[#C8CCE5]',
    },
    Agreement: {
      label: 'Kelishish uchun',
      bgColor: 'bg-[#D0F55C]',
    },
    Control: {
      label: 'Nazorat reja yaratish',
      bgColor: 'bg-[#D9D6FE]',
    },
  };

  private taskFetchService = inject(TaskFetchService);
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  ngOnInit(): void {
    this.taskFetchService.getTaskTypeStatistics().subscribe((data) => {
      this.taskStats = data;
      this.loadSvgs();
    });
  }
  private loadSvgs(): void {
    this.taskStats.forEach((item) => {
      const path = `images/icons/${item.type.toLowerCase()}.svg`;
      this.http.get(path, { responseType: 'text' }).subscribe((svg) => {
        item.svg = this.sanitizer.bypassSecurityTrustHtml(svg);
      });
    });
  }
}
