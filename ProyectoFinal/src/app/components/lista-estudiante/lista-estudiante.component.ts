import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

const ELEMENT_DATA: any = [
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
  },
  {
    id: 1,
    name: 'Brayan LP',
    dni: '74081840',
    email: 'blaureano@gmail.com',
    celular: '993232',
  },
];

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.scss'],
})
export class ListaEstudianteComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'dni',
    'email',
    'celular',
    'action',
  ];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router, public estudiante: EstudiantesService) {}

  ngOnInit(): void {
    this.getEstudiante();
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
}
