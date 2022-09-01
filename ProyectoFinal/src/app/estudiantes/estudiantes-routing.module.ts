import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guard/login.guard';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { EdicionEstudianteComponent } from './components/edicion-estudiante/edicion-estudiante.component';
import { ListaEstudianteComponent } from './components/lista-estudiante/lista-estudiante.component';
import { EstudiantesComponent } from './estudiantes.component';

const routes: Routes = [
  {
    path: '',
    component: EstudiantesComponent,
    canActivate: [LoginGuard] ,
    children: [
      {
        path: "lista",
        component: ListaEstudianteComponent,
        canActivate: [LoginGuard] 
      },
      {
        path: "editar/:id",
        component: EdicionEstudianteComponent,
        canActivate: [LoginGuard] 
      },
      {
        path: "crear",
        component: CrearEstudianteComponent,
        canActivate: [LoginGuard] 
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
