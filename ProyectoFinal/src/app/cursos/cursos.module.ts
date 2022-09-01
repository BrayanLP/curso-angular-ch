import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
// import { ListaComponent } from './components/lista/lista.component';
// import { CrearComponent } from './components/crear/crear.component';
// import { EdicionComponent } from './components/edicion/edicion.component';
// import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
// import { ComponentsedicionCursoComponent } from './componentsedicion-curso/componentsedicion-curso.component';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';
import { EdicionCursoComponent } from './components/edicion-curso/edicion-curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CursosComponent } from './cursos.component';


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


@NgModule({
  declarations: [
    // ListaComponent,
    // CrearComponent,
    // EdicionComponent,
    // ListaCursosComponent,
    ListaCursoComponent,
    // ComponentsedicionCursoComponent,
    EdicionCursoComponent,
    CrearCursoComponent,
    CursosComponent,

  ],
  imports: [
    CommonModule,
    CursosRoutingModule,

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
export class CursosModule { }

