import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector:'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage {
    listas:Lista[] = [];
    cargando:boolean;
    constructor(public deseos: DeseosService,
                public navCtrl : NavController,
                public alertCtrl : AlertController){
    }
    

    agregarLista(){
        const alerta=this.alertCtrl.create({
        title: 'Nueva lista',
        message: 'Nombre de la nueva lista que desea',
        inputs:[{
            name: 'titulo',
            placeholder: 'Nombre de la lista'
        }],
        buttons:[{
            text: 'Cancelar'
        },
        {
            text: 'Aceptar',
            handler: data=>{
                if(data.titulo.length === 0){
                    return;
                }
                this.navCtrl.push( AgregarPage,{
                    titulo: data.titulo
                } );
            }
        }]
    });
    alerta.present();
    }

}
