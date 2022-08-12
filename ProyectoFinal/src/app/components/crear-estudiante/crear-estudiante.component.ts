import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.scss'],
})
export class CrearEstudianteComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
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
      // this.info = form.value;
      // this.showResult = true;
      // this.showForm = false;
      this.form.reset();
    } else {
      console.log('en error:', this.form.value);
    }
  }
}
