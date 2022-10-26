import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barco } from 'src/barco';
import { Location } from '@angular/common';
import { BarcoService } from '../barco.service'; 

@Component({
  selector: 'app-barcos-details',
  templateUrl: './barcos-details.component.html',
  styleUrls: ['./barcos-details.component.css']
})
export class BarcosDetailsComponent implements OnInit {

  barco?: Barco;

  constructor(
    private route: ActivatedRoute,
    private BarcoService: BarcoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBarcos();
  }
  
  getBarcos(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.BarcoService.getBarco(id)
      .subscribe((barco: Barco | undefined) => this.barco = barco);
  }

  goBack(): void {
    this.location.back();
  }
}
