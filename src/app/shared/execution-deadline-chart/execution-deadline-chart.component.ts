import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  DeadlineStatDto,
  TaskFetchService,
} from '../../_services/task-fetch.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-execution-deadline-chart',
  imports: [],
  templateUrl: './execution-deadline-chart.component.html',
  styleUrl: './execution-deadline-chart.component.scss',
})
export class ExecutionDeadlineChartComponent implements OnInit {
  @ViewChild('deadlineChart', { static: true })
  chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  private taskFetchService = inject(TaskFetchService);
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.taskFetchService.getDeadlineStatistics().subscribe((res) => {
      this.mappingData(res);
    });
  }

  private mappingData(statics: DeadlineStatDto[]) {
    if (this.chart) {
      this.chart.destroy();
    }
    const labels = statics.map((x) => {
      const labelMap: Record<string, string> = {
        expired: "Muddatі o'tgan",
        day1: '1 kun',
        day2: '2 kun',
        day3: '3 kun',
        day2_murojaat: '2 kun (Murojaat)',
        day3_murojaat: '3 kun (Murojaat)',
      };
      return labelMap[x.label] ?? x.label;
    });
    const data = statics.map((s) => s.count);
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: 'rgb(158 165 209)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 5 },
          },
        },
      },
    });
  }
}
