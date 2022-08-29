import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    // canActivate: [GuardGuard] ,
    // children: [
    //   {
    //     path: "login",
    //     component: LoginComponent,
    //     // canActivate: [GuardGuard] 
    //   },
      
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
