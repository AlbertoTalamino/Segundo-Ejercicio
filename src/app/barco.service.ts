import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Barco } from 'src/barco';
import { BARCOS } from '../mock-barcos';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  constructor(private messageService: MessageService) { }

  getBarcos(): Observable<Barco[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(BARCOS);
  }

  getBarco(id: number): Observable<Barco> {
    const hero = BARCOS.find(h => h.id === id)!;
    this.messageService.add(`Barco con id=${id}`);
    return of();
  }
}
