import { Component } from '@angular/core';
import { PeliculaService } from './shared/pelicula.service';
import { Pelicula } from './shared/pelicula.model';

@Component({
    selector: 'app-peliculas',
    templateUrl: './peliculas.component.html'
})
export class PeliculasComponent {

    peliculas: Pelicula[] = [];
    title = 'Estrenos';

    constructor(public service: PeliculaService) {
        this.peliculas = service.data;
    }

    peliculaReservada(index: number) {
        alert('Reservaste ' + this.peliculas[index].nombre);
    }

}
