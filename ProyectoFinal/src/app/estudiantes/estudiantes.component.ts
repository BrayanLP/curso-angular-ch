import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  logout(){
    console.log('::SALIR::')
    localStorage.removeItem("ACCESS")
    localStorage.removeItem("DATA")
    window.location.href= 'auth/login' 
  }

}
