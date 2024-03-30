import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { miValidator } from '../../utils/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {


  userForm = this.formBuilder.group({

    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: this.formBuilder.control('', [

      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      Validators.required,
    ]),
    dni: ['', miValidator],
    fecha: ['', Validators.required],
    pais: ['', Validators.required],
    curso: ['', Validators.required],



  });


  get emailControl() {
    return this.userForm.get('email');
  }
  get dniControl() {
    return this.userForm.get('dni');
  }
  get paisControl() {
    return this.userForm.get('pais');
  }

  get nombreControl() {
    return this.userForm.get('nombre');
  }

  get apellidoControl() {
    return this.userForm.get('apellido');
  }

  get cursoControl() {
    return this.userForm.get('curso');
  }

  get fechaControl() {
    return this.userForm.get('fecha');
  }

  constructor(private formBuilder: FormBuilder) {

  }
  mostrarFormulario(status: string, value: any) {
    Swal.fire({
      title: status ,
      html: `<pre>${JSON.stringify(value, null, 2)}</pre>`,
      confirmButtonText: 'OK'
    });
  }
  onSubmit(): void {
        this.mostrarFormulario(this.userForm.status, this.userForm.value);
  }
}
