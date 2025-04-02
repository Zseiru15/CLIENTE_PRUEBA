import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { API_URLS } from '../../../config/api-config';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router){
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    })
  }

  register(){
    if (this.registerForm.valid){
      console.log('Registro Exitoso')
      const formData = this.registerForm.value;
      console.log('datos capturados', formData)

      const extededData = {
        ...formData,
        Fecha_Creacion: new Date().toISOString(),
        role: 'user',
      }

      console.log('Dato extendido', extededData)

      this.apiService.post(API_URLS.CRUD.Api_crud, extededData).subscribe({
        next: (response) => {
          console.log('registro exitoso')
          console.log('Response', response)
          alert('Se creo el usuario')
          this.goToDashboard()
        },
        error: (error) => {
          console.log('Ojo, error en el post')
          alert('Error al guardar el usuario')
        }
      })

      const jsonData = JSON.stringify(formData, null, 2)

      console.log('Datos json', jsonData)
    }
  }

  goToDashboard(){
    console.log('Boton de registro clickeado');
    this.router.navigate(['/dashboard']);
  }

}
