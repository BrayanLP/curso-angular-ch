import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { ListaEstudianteComponent } from './components/lista-estudiante/lista-estudiante.component';
import { EdicionEstudianteComponent } from './components/edicion-estudiante/edicion-estudiante.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { EdicionCursoComponent } from './components/edicion-curso/edicion-curso.component';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CrearEstudianteComponent,
    ListaEstudianteComponent,
    EdicionEstudianteComponent,
    CrearCursoComponent,
    EdicionCursoComponent,
    ListaCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
