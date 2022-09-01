import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const ELEMENT_DATA: any = [
  {
    id: 1,
    name: '---',
    dni: '---',
    email: '---',
    celular: '---',
    fechaInicio: '----',
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
    'nombre',
    'dni',
    'ingreso',
    'correo',
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
    this.estudiante.deleteEstudiante(dni).subscribe( (res) => {
      this._snackBar.open(`usuario eliminado`, '', {
        duration: 5000,
      });
      this.getEstudiante();
    })
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
