import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EstudiantesService } from 'src/app/services/estudiantes.service';


@Component({
  selector: 'app-edicion-estudiante',
  templateUrl: './edicion-estudiante.component.html',
  styleUrls: ['./edicion-estudiante.component.scss']
})
export class EdicionEstudianteComponent implements OnInit, OnDestroy {

  value = {
    nombre: '',
    dni: '',
    correo: '',
    celular: ''
  }
  id : any;
  form : FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public estudiante: EstudiantesService,
    private snackBar: MatSnackBar
    ) { 
    this.form = this.fb.group({
      nombre: [this.value?.nombre, Validators.required],
      dni: [this.value.dni, [Validators.required, Validators.maxLength(8)]],
      correo: [this.value.correo, [Validators.required, Validators.email]],
      celular: [this.value.celular, [Validators.required, Validators.maxLength(9)]],
    })


    
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    const id = this.route.snapshot.params.id;
    this.estudiante.getByIDEstudiante(id).subscribe( (data: any ) => {
      console.log(data)
      this.value = data
      this.form.get('nombre')?.patchValue(data.nombre)
      this.form.get('dni')?.patchValue(data.dni)
      this.form.get('correo')?.patchValue(data.correo)
      this.form.get('celular')?.patchValue(data.celular)
      this.id = id;
    });
  }

  submit (form: FormGroup): void {
    const id = this.route.snapshot.params.id;
    if(!form.invalid){
      console.log('perfecto ingresando....'); 
      this.estudiante.editEstudiante(id, form.value).subscribe((data) => console.log(data)) 
      this.snackBar.open('Actualizado Correctamente!!');
      this.router.navigate(['estudiante/lista'])

    }
    else{ 
      console.log('en error:', form.value);
    }
  }

  ngOnDestroy (): void{
    this.form.reset();
    console.log('saliendo de edición')
  }

}