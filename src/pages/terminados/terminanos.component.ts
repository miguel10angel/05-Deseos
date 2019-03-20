import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector:'page-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosPage {
        constructor( public deseos: DeseosService,
                public navCtrl : NavController,){

    }

    listaSeleccionada(lista:Lista){
        this.navCtrl.push( AgregarPage,{
            titulo: lista.titulo,
            lista: lista
        } );
    }

}
