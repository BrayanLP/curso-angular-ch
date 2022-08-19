import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const ELEMENT_DATA: any = [
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
    fechaInicio: 'Thu Aug 21 2022 19:02:21 GMT-0500 (hora estándar de Perú)',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
    fechaInicio: 'Thu Aug 10 2022 19:02:21 GMT-0500 (hora estándar de Perú)',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
    fechaInicio: 'Thu Aug 15 2022 19:02:21 GMT-0500 (hora estándar de Perú)',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
    fechaInicio: 'Thu Aug 13 2022 19:02:21 GMT-0500 (hora estándar de Perú)',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
    fechaInicio: 'Thu Aug 01 2022 19:02:21 GMT-0500 (hora estándar de Perú)',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
    fechaInicio: 'Thu Aug 03 2022 19:02:21 GMT-0500 (hora estándar de Perú)',
  },
];

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.scss'],
})
export class ListaEstudianteComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'name',
    'dni',
    'fechaInicio',
    'email',
    'celular',
    'action',
  ];
  dataSource = ELEMENT_DATA;
  constructor(
    private router: Router,
    public estudiante: EstudiantesService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getEstudiante();
  }

  delete(dni: string) {
    console.log('DNI', dni);
    this._snackBar.open(`usuario ${dni} eliminado`, '', {
      duration: 5000,
    });
  }
  goToCreate() {
    this.router.navigate(['/estudiante/crear']);
  }
  goToEdit(info: any) {
    console.log(info);
    this.router.navigate([`/estudiante/editar/${info.id}`]);
  }
  getEstudiante() {
    this.estudiante
      .getEstudiante()
      .subscribe((data: any) => (this.dataSource = data));
  }
  ngOnDestroy() {
    console.log('saliendo de Listado de estudiante');
    this.dataSource = [];
  }
}
