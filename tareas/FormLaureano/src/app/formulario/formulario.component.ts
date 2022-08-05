import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  toppingList: string[] = ['Futbol', 'Basket', 'Natación', 'Tennis'];

  showForm= true;
  showResult= false;
  form : FormGroup;
  info: any = {}

  constructor(private fb: FormBuilder ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      tipo: ['', Validators.required],
      celular: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      descripcion: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit (form: FormGroup): void {
    if(!form.invalid){
      console.log('perfecto');
      this.info = form.value;
      // this.showResult = true;
      // this.showForm = false;
      form.reset();
      alert('Formulario enviado correctamente');
    }
    else{ 
      console.log('en error:', form.value);
    }
  }

}
