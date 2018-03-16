
import {NgModule} from '@angular/core';
import{FotoComponent} from'./foto.component';

@NgModule({

    /* declarations contem tudo o que faz parte do módulo*/
declarations:[FotoComponent],
/*exports o que desse modulo eu quero permitir que outros modulos ultilizem  */
exports:[FotoComponent]

})
export class FotoModule{

}