import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component'

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Pelicula', component: PeliculaComponent}
    

];
