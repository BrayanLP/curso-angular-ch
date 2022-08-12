import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edicion-estudiante',
  templateUrl: './edicion-estudiante.component.html',
  styleUrls: ['./edicion-estudiante.component.scss'],
})
export class EdicionEstudianteComponent implements OnInit {
  value = {
    nombre: 'Brayan LP',
    dni: '74081840',
    correo: 'blaureano@gmail.com',
    celular: '98543222',
  };
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [this.value?.nombre, Validators.required],
      dni: [this.value.dni, Validators.required],
      correo: [this.value.correo, Validators.required],
      celular: [this.value.celular, Validators.required],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    if (!this.form.invalid) {
      console.log('perfecto');
      // this.info = form.value;
      // this.showResult = true;
      // this.showForm = false;
      this.form.reset();
    } else {
      console.log('en error:', this.form.value);
    }
  }
}
