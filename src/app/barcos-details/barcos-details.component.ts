import { Component, Input, OnInit } from '@angular/core';
import { Barco } from 'src/barco';

@Component({
  selector: 'app-barcos-details',
  templateUrl: './barcos-details.component.html',
  styleUrls: ['./barcos-details.component.css']
})
export class BarcosDetailsComponent implements OnInit {

  @Input() barco?: Barco;

  constructor() { }

  ngOnInit(): void {
  }

}
