export interface Pelicula{
    Id:number,
    Nombre:string,
    EsEstreno:boolean,
    Genero:string,
    Duracion:number,
    Director:string
    FechaSalida:string,
    imagenUrl:string
    VentaAnticipada?:Boolean,
    Descripcion?:string
    Actores?:string[],
};