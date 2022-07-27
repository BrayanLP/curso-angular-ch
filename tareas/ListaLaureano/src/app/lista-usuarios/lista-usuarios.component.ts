import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA= [
  {position: 1, nombre: 'Pedro Gomez', celular: 990232404, correo: 'pedro@yopmail.com'},
  {position: 2, nombre: 'Carlos sanbrano', celular: 970604333, correo: 'carlos@yopmail.com'},
  {position: 3, nombre: 'Israel Wegierski', celular: 950302040, correo: 'isra@yopmail.com'},
  {position: 4, nombre: 'Elon musk', celular: 920440504, correo: 'elon@tesla.com'}, 
];


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})

export class ListaUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nombre', 'celular', 'correo'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
