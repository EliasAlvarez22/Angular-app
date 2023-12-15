import { Component, Input } from '@angular/core';
import { Pelicula } from '../../Models/Pelicula.model';
import { UpperCasePipe } from '@angular/common';
import { Cine } from '../../Models/Cine.model';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export class HorariosComponent {

  @Input() peliculaSeleccionada?:Pelicula;
  public Cines?:Cine[] = [
   {
    Id:1,
    Nombre:"Abasto"
   },
   {
    Id:2,
    Nombre:"Tortugas"
   },
  ];
  public Peliculas?:string[]; 

}
