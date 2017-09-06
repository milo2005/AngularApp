import { selector } from 'rxjs/operator/publish';
import { Component, Input } from '@angular/core';
import { Pelicula } from '../shared/pelicula.model';

@Component({
  selector: 'app-card',
  templateUrl: './pelicula-card.component.html',
  styleUrls: ['./pelicula-card.component.css']
})
export class PeliculaCardComponent {

  @Input() pelicula: Pelicula;

}
