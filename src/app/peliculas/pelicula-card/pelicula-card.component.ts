import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../shared/pelicula.model';

@Component({
  selector: 'app-card',
  templateUrl: './pelicula-card.component.html',
  styleUrls: ['./pelicula-card.component.css']
})
export class PeliculaCardComponent {

  @Input() pelicula: Pelicula;
  @Input() index: number;
  @Output() reserva: EventEmitter<number> = new EventEmitter<number>();

  reservar() {
    this.reserva.emit(this.index);
  }

}
