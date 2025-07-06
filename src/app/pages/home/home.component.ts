import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { StatisticsComponent } from './statistics/statistics.component';

@Component({
  selector: 'app-home',
  imports: [NgClass, StatisticsComponent],
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
