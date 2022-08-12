import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  constructor(private http: HttpClient) {}

  getEstudiante() {
    const api = 'http://192.99.154.178:3000/estudiante';
    // now returns an Observable of Config
    return this.http.get(api);
  }
}
