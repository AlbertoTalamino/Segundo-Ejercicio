import { Component, OnInit } from '@angular/core';
import { Barco } from 'src/barco';
import { BarcoService } from '../barco.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  barco: Barco[] = [];

  constructor(private heroService: BarcoService) { }

  ngOnInit(): void {
    this.getBarcos();
  }

  getBarcos(): void {
    this.heroService.getBarcos()
      .subscribe(barcos => this.barco = barcos);
  }
}
