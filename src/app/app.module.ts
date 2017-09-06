import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar.component';

@NgModule({
  // Componentes, Directivas y Pipes
  declarations: [
    AppComponent, ToolbarComponent
  ],
  // Agregamos un modulo
  imports: [
    BrowserModule
  ],
  // Crea un instancia unica (Singleton) del servicio en el modulo
  providers: [],
  // El componente que inicia de primero
  bootstrap: [AppComponent]
})
export class AppModule { }
