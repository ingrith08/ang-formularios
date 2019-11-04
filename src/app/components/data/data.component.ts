import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;
  usuario:Object = {
    nombreCompleto:{
      nombre:"Ingrhy",
      apellido:"Hincapie"
    },
    email:"in@gmail.com",
    pasatiempos: []
  }

  constructor() {
    console.log(this.usuario);
    
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', Validators.required),
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required),
      ])
    });
    // this.forma.setValue(this.usuario);
   }

   guardar(){
     console.log(this.forma);
     console.log(this.forma.value);
     this.forma.reset({
      ombreCompleto:{
        nombre:"",
        apellido:""
      },
      email:""
     });
   }
   agregarPasatiempo(){
      (<FormArray>this.forma.controls['pasatiempos']).push(
        new FormControl('', Validators.required)
      )
   }

}
