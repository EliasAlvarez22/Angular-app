import { Injectable } from '@angular/core';
import { Pelicula } from '../../Models/Pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() {
    
  }
  public GetNamePeliculas():string[]{
    
    let peliculas: string[] = [
      "Pelicula 1",
      "Pelicula 2",  
      "Pelicula 3",                  
      "Pelicula 4",                  
      "Pelicula 5",                  
    ];
    
    return peliculas;
  }
}
