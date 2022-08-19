import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      dni: ['', Validators.required],
      correo: ['', Validators.required],
      celular: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    if (!this.form.invalid) {
      console.log('perfecto');
      this.form.reset();
      this._snackBar.open('Estudiante Creado correctamente !!!', '', {
        duration: 5000,
      });
    } else {
      console.log('en error:', this.form.value);
    }
  }

  ngOnDestroy() {
    console.log('saliendo creación de estudiante');
    this.form.reset();
  }
}
