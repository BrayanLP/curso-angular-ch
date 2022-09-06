import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-edicion-curso',
  templateUrl: './edicion-curso.component.html',
  styleUrls: ['./edicion-curso.component.scss']
})
export class EdicionCursoComponent implements OnInit {

  value = {
    nombre: '',
    profesor: '',
    tiempo: '',
    complejidad: ''
  }
  id : any;
  form : FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public curso: CursoService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { 
    this.form = this.fb.group({
      nombre: [this.value?.nombre, Validators.required],
      profesor: [this.value.profesor, Validators.required],
      tiempo: [this.value.tiempo, Validators.required], 
      complejidad: [this.value.complejidad, Validators.required], 
    })


    
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    const id = this.route.snapshot.params.id;
    this.curso.getByIDCurso(id).subscribe( (data: any ) => {
      console.log(data)
      this.value = data
      this.form.get('nombre')?.patchValue(data.nombre)
      this.form.get('profesor')?.patchValue(data.profesor)
      this.form.get('tiempo')?.patchValue(data.tiempo)
      this.form.get('complejidad')?.patchValue(data.complejidad)
      this.id = id;
    });
  }

  submit (form: FormGroup): void {
    const id = this.route.snapshot.params.id;
    if(!form.invalid){
      console.log('perfecto ingresando....'); 
      this.curso.editCurso(id, form.value).subscribe((data) => console.log(data)) 
      this.snackBar.open('Actualizado Correctamente!!'); 
      this.router.navigate(['curso/lista'])
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