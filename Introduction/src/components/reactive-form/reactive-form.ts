

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveForm {
  private fb = inject(FormBuilder)
  productForm!: FormGroup;

  constructor() {
    this.productForm = this.fb.group({
      name: [,Validators.required],
      description: [],
      price: [,Validators.required],
      stock: [,Validators.required]
    })
  }

  saveProduct() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched()
      return;
    }
    console.log('Valor del formulario', this.productForm.value)
    // Aquí va la función de guardado
  }
}
/*
Registro Empleado
Nombre
Apellido
Puesto (Select?)
Perfil académico
Edad
Guardar
*/