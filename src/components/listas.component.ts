import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from '../models/index';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';



@Component({
    selector:'app-listas',
    templateUrl: 'listas.component.html'
})


export class ListasComponent {

    @Input() terminada:boolean = false;
    constructor( public deseos: DeseosService,
                private navCtrl: NavController,
                public alertCtrl : AlertController){

    }

    eliminarItem(lista:Lista){
        this.deseos.borarLista(lista);
    }

    listaSeleccionada(lista:Lista){
        this.navCtrl.push( AgregarPage,{
            titulo: lista.titulo,
            lista: lista
        } );
    }

    editar(lista:Lista, slidingItem:ItemSliding){
        slidingItem.close();
        
        const alerta=this.alertCtrl.create({
        title: 'Editar lista',
        message: 'Nombre de la nueva lista que desea',
        inputs:[{
            name: 'titulo',
            placeholder: 'Nombre de la lista',
            value : lista.titulo
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
                lista.titulo=data.titulo;
                this.deseos.guardarStorage();
            }
        }]
    });
    alerta.present();
    }


}
