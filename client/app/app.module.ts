import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}from './app.component';

/*Ng Module:Transforma a classe em um módulo do angular */
@NgModule({
    /*Como vai ser rodado em um navegador importa o BrowserModule,se fosse em ionic por exemplo,importaria 
    o Ionic */
    imports:[BrowserModule],
    /*declaration: O que o módulo declara,o que faz parte dele,no exemplo AppComponent */
    declarations:[AppComponent],
    /*bootstrap,se vc tiver mais de um componente,qual sera iniciado,no exemplo AppComponent */
    bootstrap:[AppComponent]

})
class AppModule {


}