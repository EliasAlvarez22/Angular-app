import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../Models/Pelicula.model';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { PeliculaComponent } from '../pelicula/pelicula.component';
import { HorariosComponent } from '../horarios/horarios.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, PeliculaComponent, CommonModule, HorariosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  public seleccionada:boolean = false ;

  @Input() pelicula?:Pelicula ;
  public  peliculas: Pelicula[] = [
  {
    Id: 1,
    Nombre: 'Pelicula 1',
    EsEstreno: true,
    Genero: 'Drama',
    Duracion: 120,
    Director: 'Director 1',
    FechaSalida: '2023-01-01',
    imagenUrl: 'https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/1092.jpg?v=00002249',
    VentaAnticipada: true,
    Descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    Actores: ["Oriana", "Elias"],
  },
  {
    Id: 2,
    Nombre: 'Pelicula 2',
    EsEstreno: false,
    Genero: 'Comedia',
    Duracion: 90,
    Director: 'Director 2',
    FechaSalida: '2023-02-15',
    imagenUrl: 'https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/1041.jpg?v=00002249',
    Descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  },
  {
    Id: 3,
    Nombre: 'Pelicula 3',
    EsEstreno: true,
    Genero: 'Acción',
    Duracion: 110,
    Director: 'Director 3',
    FechaSalida: '2023-03-30',
    imagenUrl: 'https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/1076.jpg?v=00002249',
    VentaAnticipada: false,
    Descripcion: 'Una emocionante película de acción.',
  },
  {
    Id: 4,
    Nombre: 'Pelicula 4',
    EsEstreno: false,
    Genero: 'Suspense',
    Duracion: 100,
    Director: 'Director 4',
    FechaSalida: '2023-04-10',
    imagenUrl: 'https://example.com/imagen4.jpg',
  },
  {
    Id: 5,
    Nombre: 'Pelicula 5',
    EsEstreno: true,
    Genero: 'Aventura',
    Duracion: 130,
    Director: 'Director 5',
    FechaSalida: '2023-05-20',
    imagenUrl: 'https://example.com/imagen'

  },

  ];

  ngOnInit(): void {
    
  }
  

  
  private ValidarImagenes(Peliculas: Pelicula[]):void{
    
  }

  public MostrarPelicula(pelicula:Pelicula){
    this.seleccionada = !this.seleccionada;
    this.pelicula = pelicula;
  }
  public  Mostrar(){
    this.seleccionada = !this.seleccionada;
  }

}
