import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guard/login.guard';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { EdicionCursoComponent } from './components/edicion-curso/edicion-curso.component';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    canActivate: [LoginGuard] ,
    children: [
      {
        path: "lista",
        component: ListaCursoComponent,
        canActivate: [LoginGuard] 
      },
      {
        path: "edicion/:id",
        component: EdicionCursoComponent,
        canActivate: [LoginGuard] 
      },
      {
        path: "crear",
        component: CrearCursoComponent,
        canActivate: [LoginGuard] 
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
