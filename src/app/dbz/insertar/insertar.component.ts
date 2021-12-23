import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent  {



  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(){
    if(this.nuevo.nombre.trim().length ===0){return;}

    console.log(this.nuevo);
    this.nuevoPersonaje.emit(this.nuevo);

    this.nuevo = {nombre:'', poder:0};

  }

}
