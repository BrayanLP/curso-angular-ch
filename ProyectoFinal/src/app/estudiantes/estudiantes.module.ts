import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { EdicionEstudianteComponent } from './components/edicion-estudiante/edicion-estudiante.component';
import { ListaEstudianteComponent } from './components/lista-estudiante/lista-estudiante.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { EstudiantesComponent } from './estudiantes.component';

@NgModule({
  declarations: [
    CrearEstudianteComponent,
    EdicionEstudianteComponent,
    ListaEstudianteComponent,
    EstudiantesComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
  ]
})
export class EstudiantesModule { }
