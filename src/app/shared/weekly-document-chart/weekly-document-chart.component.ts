import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DocumentService } from '../../_services/document.service';

Chart.register(...registerables);
@Component({
  selector: 'app-weekly-document-chart',
  imports: [],
  templateUrl: './weekly-document-chart.component.html',
  styleUrl: './weekly-document-chart.component.scss',
})
export class WeeklyDocumentChartComponent implements OnInit {
  @ViewChild('weeklyChart', { static: true })
  chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  currentMode: 'last' | 'current' = 'last';
  private docService = inject(DocumentService);
  ngOnInit(): void {
    this.loadData(this.currentMode);
  }
  toggle(week: 'current' | 'last') {
    if (week === this.currentMode) {
      return;
    }
    this.currentMode = week;
    this.loadData(week);
  }

  loadData(week: 'current' | 'last') {
    this.docService.getWeeklyStatistics(week).subscribe((stats) => {
      if (this.chart) {
        this.chart.destroy();
      }

      const labels = stats.map((s) => {
        const dayMap: Record<string, string> = {
          monday: 'Du',
          tuesday: 'Se',
          wednesday: 'Cho',
          thursday: 'Pa',
          friday: 'Ju',
          saturday: 'Sha',
          sunday: 'Ya',
        };
        return dayMap[s.day] ?? s.day;
      });

      const data = stats.map((s) => s.count);

      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              data,
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
    });
  }
}
