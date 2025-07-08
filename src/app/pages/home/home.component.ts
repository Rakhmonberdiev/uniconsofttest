import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { StatisticsComponent } from './statistics/statistics.component';
import { CalendarComponent } from '../../shared/calendar/calendar.component';
import { WeatherComponent } from '../../shared/weather/weather.component';

@Component({
  selector: 'app-home',
  imports: [NgClass, StatisticsComponent, CalendarComponent, WeatherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tabs: string[] = ['Yangiliklar', 'Statistika', "So'rovnoma"];
  activeTab: string = 'Statistika';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
