import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import {Router} from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent implements OnInit,OnDestroy {

  form : FormGroup;
  constructor(
    private fb: FormBuilder,
    public curso: CursoService,
    private router: Router
  ) { 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      profesor: ['', Validators.required],
      tiempo: ['', Validators.required], 
      complejidad: ['', Validators.required]
    })
  } 
  ngOnInit(): void {
  }

  submit (form: FormGroup): void {
    if(!form.invalid){
      console.log('perfecto'); 
      this.curso.createCurso(form.value).subscribe((data:any) => console.log(data))
      form.reset();
      this.router.navigate(['/curso/lista']);

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