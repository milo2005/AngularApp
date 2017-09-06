import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar.component';
import { PeliculaCardComponent } from './peliculas/pelicula-card/pelicula-card.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaService } from './peliculas/shared/pelicula.service';

@NgModule({
  // Componentes, Directivas y Pipes
  declarations: [
    AppComponent, ToolbarComponent, PeliculaCardComponent, PeliculasComponent
  ],
  // Agregamos un modulo
  imports: [
    BrowserModule
  ],
  // Crea un instancia unica (Singleton) del servicio en el modulo
  providers: [PeliculaService],
  // El componente que inicia de primero
  bootstrap: [AppComponent]
})
export class AppModule { }
