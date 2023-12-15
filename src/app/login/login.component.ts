import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators , FormsModule } from '@angular/forms';
import { Usuario } from '../../Models/Usuario.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  public loginForm: FormGroup;

  public user?:Usuario
  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]
    });
  }

  //El usuario es valido cuando se encuentra en la DB.
  private UsuarioValido(email:string, password:string): boolean {
    
    return true;
    
  }
  public Login():void{
    if(!this.UsuarioValido(this.user!.Email,this.user!.Password)){
      
      return;
    }

  }
}

