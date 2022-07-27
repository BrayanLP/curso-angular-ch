import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA= [
  {position: 1, nombre: 'Pedro Gomez', celular: 990232404, correo: 'pedro@yopmail.com', estado: 1,cursos: ["React","Angular","Vue"]},
  {position: 2, nombre: 'Carlos sanbrano', celular: 970604333, correo: 'carlos@yopmail.com', estado: 2, cursos: ["Angular","Vue"]},
  {position: 3, nombre: 'Israel Wegierski', celular: 950302040, correo: 'isra@yopmail.com', estado: 3, cursos:["Vue"]},
  {position: 4, nombre: 'Elon musk', celular: 920440504, correo: 'elon@tesla.com', estado: 1, cursos: ["React"]}, 
];


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})

export class ListaUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nombre', 'celular', 'correo', "estado", "cursos"];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
