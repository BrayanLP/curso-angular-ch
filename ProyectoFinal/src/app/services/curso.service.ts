import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  api : string = 'https://630cc4fb83986f74a7ca0f27.mockapi.io'

  constructor(private http: HttpClient) { }

  getCurso() {
    // now returns an Observable of Config
    return this.http.get(this.api+'/cursos');
  }
  createCurso(data: any){
    return this.http.post(this.api + '/cursos' , data);
  }
  getByIDCurso(id:any){
    return this.http.get(this.api + '/cursos/'+ id);
  }
  editCurso (id: any, data: any){
    return this.http.put(this.api + '/cursos/'+ id , data)
  }
}