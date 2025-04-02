import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../../config/api-config';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VideoModalComponent } from '../video-modal/video-modal.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private http:HttpClient, private dialog: MatDialog){}

  displayedColumns: string[]=['Id', 'Nombre', 'Correo', 'Edad', 'Sitio Web']

  dataSource = [
    {id: 1, name: 'Camilo Ordoñez', email: 'Camilo@prueba.com', phone: 21, website: ''},
    {id: 2, name: 'Andres Mairongo', email: 'Mairongo@prueba.com', phone: 22, website: ''},
    {id: 3, name: 'Julith Cuberos', email: 'July@prueba.com', phone: 19, website: ''},
    {id: 4, name: 'Dario Puldarin', email: 'Dario@prueba.com', phone: 22, website: ''}
  ];

  consultarDatos(): void{

    this.http.get<any[]>(API_URLS.CRUD.Api_crud2).subscribe(
      (data)=>{
        console.log('Estos son los datos', data)
        this.dataSource=data;
        console.log('Esto es lo que le paso a la tabla', this.dataSource)
      },
      (error)=>{
        console.error('Error al obtener datos', error)
      }
    );
  }

  openVideoModal(){
    this.dialog.open(VideoModalComponent, {
      data: {url: 'https://www.youtube.com/embed/d7tJb0t29PE'},
      width: '600px'
    })
  }

}
