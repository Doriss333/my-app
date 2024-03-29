import { Component } from '@angular/core';
import { Event } from './eventos-model';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent{
  eventos: Event[] = [
    {
      nombre: 'HANDBALL',
      detalle: 'Descripción del evento 1',
      fecha: new Date('2023-06-20'),
      estado: 'Activo',
      imagen: 'assets/img/handball.jpg'
    },
    {
      nombre: 'Voley',
      detalle: 'Descripción del evento 2',
      fecha: new Date('2023-06-21'),
      estado: 'Inactivo',
      imagen: 'assets/img/voley.jpg'
    },
    {
      nombre: 'Basquet',
      detalle: 'Descripción del evento 3',
      fecha: new Date('2023-06-21'),
      estado: 'Inactivo',
      imagen: 'assets/img/basquet.jpg'
    },
    // Agrega más eventos a la lista según tus necesidades
  ];
}
