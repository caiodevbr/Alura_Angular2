import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FotoComponent } from './foto/foto.component';

/*Ng Module:Transforma a classe em um módulo do angular */
@NgModule({

    /*declaration: O que o módulo declara,o que faz parte dele,no exemplo AppComponent */
  declarations: [
    AppComponent,
    FotoComponent
  ],
  /*Como vai ser rodado em um navegador importa o BrowserModule,se fosse em ionic por exemplo,importaria 
    o Ionic */
  imports: [
    BrowserModule
  ],
  providers: [],
  /*bootstrap,se vc tiver mais de um componente,qual sera iniciado,no exemplo AppComponent */
  bootstrap: [AppComponent]
})
export class AppModule { }




