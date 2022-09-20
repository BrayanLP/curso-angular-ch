import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    console.log('::SALIR::')
    localStorage.removeItem("ACCESS")
    localStorage.removeItem("DATA")
    window.location.href= 'auth/login' 
  }

}
