import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.scss']
})
export class ListaCursoComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'nombre', 'profesor', 'tiempo','complejidad', 'action'];
  dataSource = [];
  constructor(private router: Router, public curso: CursoService) { 
    this.getCursos();
    console.log('"INICIALIZANDO...')
  }

  ngOnInit(): void {
  }

  goToCreate(){
    this.router.navigate(['/curso/crear']);
  }
  goToEdit(info: any){
    console.log(info)
    this.router.navigate([`/curso/edicion/${info.id}`])
  }
  getCursos(){

    this.curso.getCurso()
    .subscribe((data: any) => this.dataSource = data);
  }
  ngOnDestroy(): void {
    this.dataSource = []
  }

}