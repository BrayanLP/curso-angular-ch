import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  constructor(private http: HttpClient) {}
  API = 'https://630cc4fb83986f74a7ca0f27.mockapi.io'
  getEstudiante() {
    const api = `${this.API}/usuarios`;
    // now returns an Observable of Config
    return this.http.get(api);
  }
  createEstudiante(data:any) {
    const api = `${this.API}/usuarios`;
    // now returns an Observable of Config
    return this.http.post(api, data);
  }
  deleteEstudiante(id:any){
    return this.http.delete(this.API + '/usuarios/'+ id);
  }
  getByIDEstudiante(id:any){
    return this.http.get(this.API + '/usuarios/'+ id);
  }
  editEstudiante (id: any, data: any){
    return this.http.put(this.API + '/usuarios/'+ id , data)
  }

}
