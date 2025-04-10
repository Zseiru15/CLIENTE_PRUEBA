import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../../../config/api-config';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VideoModalComponent } from '../../video-modal/video-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import emailjs from'emailjs-com';

@Component({
  selector: 'app-usuario',
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  displayedColumns: string[] = ['Id', 'Nombre', 'Correo', 'Numero', 'Sitio Web', 'upload', 'notify']

  dataSource = [
    { id: 1, name: 'Camilo Ordoñez', email: 'sneyderordonez122@unisangil.edu.co', phone: 21, website: 'Sitio-Web-Camilo.com' },
    { id: 2, name: 'Andres Mairongo', email: 'Mairongo@prueba.com', phone: 22, website: 'Sitio-Web-Mairongo.com' },
    { id: 3, name: 'Julith Cuberos', email: 'July@prueba.com', phone: 19, website: 'Sitio-Web-July.com' },
    { id: 4, name: 'Dario Puldarin', email: 'Dario@prueba.com', phone: 22, website: 'Sitio-Web-Dario.com' }
  ];

  filtros = {
    id: '',
    name: '',
    email: '',
    phone: '',
    website: ''
  }

  datafilter = [...this.dataSource]

  aplicarFiltros() {
    this.datafilter = this.dataSource.filter((row: any) => {
      return Object.entries(this.filtros).every(([key, filtro]) => {
        const valorFiltro = filtro.toLowerCase();
        return row[key]?.toString().toLowerCase().includes(valorFiltro);
      });
    });
  }

  consultarDatos(): void {

    this.http.get<any[]>(API_URLS.CRUD.Api_crud2).subscribe(
      (data) => {
        console.log('Estos son los datos', data)
        this.datafilter = data;
        this.dataSource = data;
        console.log('Esto es lo que le paso a la tabla', this.dataSource)
      },
      (error) => {
        console.error('Error al obtener datos', error)
      }
    );
  }

  openVideoModal() {
    this.dialog.open(VideoModalComponent, {
      data: { url: 'https://www.youtube.com/embed/d7tJb0t29PE' },
      width: '600px'
    })
  }

  onFileSelected(event: Event, row: any){
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0){
      const file = input.files[0]
      console.log(file)
      console.log ("Esta es la fila ", row)
      alert("Documento seleccionado: " + file.name)
      //enviarlo a un api o guardarlo en una base de datos
      
    }
  }
  enviarNotificacion(email: string){
    const templateParams = {
      email: email,
      message: 'Este mensaje es de prueba enviado desde mi cliente de ADSO',
      from_name: 'SPY',
      asunto: 'Notificacion de prueba',
    };

    emailjs.send('service_xe9532l', 'template_qxrju0q', templateParams, 'xyoa6ydavmYivhY9q').then(response => {
      console.log('Correo enviado con exito')
      alert('Correo enviado a: ' + email)
    }, error => {
      console.error('Error al enviar el correo', error)
    })
  }

}
