import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginService } from '../../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form! : FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private loginService : LoginService
  ) { 

    this.form = this.fb.group({
      correo: ['prueba@yopmail.com', [Validators.email, Validators.required]],
      password: ['123456', Validators.required], 
    })

    if(this.loginService.obtenerSesionActiva() == "true"){
       this.router.navigate(['estudiante/lista'])
    }

  }

  ngOnInit(): void {
  }

  submit (): void {
    if(!this.form.invalid){
      if(this.form.value.correo === "prueba@yopmail.com" && this.form.value.password === "123456"){
        localStorage.setItem('ACCESS', "true");
        localStorage.setItem('DATA', JSON.stringify(this.form.value))
        window.location.reload();
      }
      else{
          this._snackBar.open('Correo o contraseña son incorrectos!!');
        
      }
    }
    else{ 
      console.log('en error:', this.form.value);
    }
  }

}
