import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.scss'],
})
export class CrearEstudianteComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  default = {
    nombre: '',
    dni: '',
    correo: '',
    celular: '',
  };
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private estudiantesService: EstudiantesService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      dni: ['', [Validators.required, Validators.maxLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.maxLength(9)]],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    if (!this.form.invalid) {
      console.log('perfecto');
      this.estudiantesService.createEstudiante(this.form.value).subscribe( (e) =>{
        this.form.reset();
        this._snackBar.open('Estudiante Creado correctamente !!!', '', {
          duration: 5000,
        });
        this.router.navigate(['estudiante/lista'])

      })
    } else {
      console.log('en error:', this.form.value);
    }
  }

  ngOnDestroy() {
    console.log('saliendo creación de estudiante');
    this.form.reset();
  }
}
