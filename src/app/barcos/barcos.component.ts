import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BARCOS } from 'src/mock-barcos';
import { Barco } from '../../barco';
import { BarcoService } from '../barco.service';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})
export class BarcosComponent implements OnInit {

  barcos: Barco[] = [];

  constructor(private BarcoService: BarcoService) {}

  ngOnInit(): void {
    this.getBarcos();
  }

  getBarcos(): void {
    this.BarcoService.getBarcos()
        .subscribe(barcos => this.barcos = barcos);
  }

}
