import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
// import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
// import { EdicionCursoComponent } from './components/edicion-curso/edicion-curso.component';
// import { EdicionEstudianteComponent } from './components/edicion-estudiante/edicion-estudiante.component';
// import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';
// import { ListaEstudianteComponent } from './components/lista-estudiante/lista-estudiante.component';

const routes: Routes = [
  // { path: 'estudiante/lista', component: ListaEstudianteComponent },
  // { path: 'estudiante/editar/:id', component: EdicionEstudianteComponent },
  // { path: 'estudiante/crear', component: CrearEstudianteComponent },
  // { path: 'curso/lista', component: ListaCursoComponent },
  // { path: 'curso/editar/:id', component: EdicionCursoComponent },
  // { path: 'curso/crear', component: CrearCursoComponent },
  // { path: 'login', component: CrearCursoComponent },
  // { path: '', redirectTo: 'estudiante/lista', pathMatch: 'full' },
  { path: 'curso', 
    loadChildren: ()=> import('./cursos/cursos.module').then(m=> m.CursosModule),
    // canActivate: [GuardGuard] 
     
  }, 
  { 
    path: 'estudiante', 
    loadChildren: ()=> import('./estudiantes/estudiantes.module').then(m=> m.EstudiantesModule),
    // canActivate: [GuardGuard] 
  }, 
  { 
    path: 'auth', 
    loadChildren: ()=> import('./auth/auth.module').then(m=> m.AuthModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
