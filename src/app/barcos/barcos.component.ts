import { Component, OnInit } from '@angular/core';
import { BARCOS } from 'src/mock-barcos';
import { Barco } from '../../barco';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})
export class BarcosComponent implements OnInit {

  barcos = BARCOS;
  selectedBarco?: Barco;

  constructor() { }

  ngOnInit(): void {
    
  }

  
  onSelect(barco: Barco): void {
    this.selectedBarco = barco;
  }

}
