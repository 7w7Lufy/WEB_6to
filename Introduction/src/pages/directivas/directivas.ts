import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Empleados } from '../../Interfaces/Empleados';
import { Emojis } from '../../Interfaces/Emojis';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Directivas {
  
role: 'admin' | 'user' = 'user';
  isActive = false;
  codigo:string = '117';
  listaCodigos:string[] = ['404', '401', '500', '201', '200'];
  empleadosCopia:Empleados[]=[];

  emojis:Emojis[] = [{
    id: '1',
    emoji: ['☠️']
  }];

  moodEmojis: string[] = ['☠️', '🙁', '😐', '🙂', '😁'];
  moodIndex = 2;

  empleados:Empleados[] = [{
    id: 1,
    nombre: 'Juan Pérez',
    puesto: 'Desarrollador',
    edad: 30,
    email: 'ejemplo@gmail.com',
    habilidades: ['Angular', 'TypeScript', 'JavaScript'],
    activo: true,
    salario: 50000
  },
  {
    id: 2,
    nombre: 'María Gómez',
    puesto: 'Diseñadora',
    edad: 28,
    email: '@nada',
    habilidades: ['Photoshop', 'Illustrator', 'Figma'],
    activo: false
  },
  {
    id: 3,
    nombre: 'Carlos Rodríguez',
    puesto: 'Analista de Datos',
    edad: 35,
    email: '@nada',
    habilidades: ['Python', 'R', 'SQL'],
    activo: true,
    salario: 60000
  }
];

  activarUsuario() {
    this.isActive =!this.isActive;
  }
  serAdmin() {
    this.role = 'admin';
  }
  seruser() {
    this.role = 'user';
  }
  finiquitarEmpleado() {
    this.empleadosCopia = this.empleados
    this.empleados = [];
  }
  recuperarEmpleados() {
    this.empleados = this.empleadosCopia;
  }
  agregarEmpleado(nuevo:Empleados) {
    this.empleados.push(nuevo);
  }
  agregarEmoji() {
    if (this.emojis.length >= 10) return;
    this.emojis.push({
      id: String(this.emojis.length + 1),
      emoji: ['☠️']
    });
  }
  borrarEmoji(){
    this.emojis=[];
  }
  masFeliz() {
    if (this.moodIndex < this.moodEmojis.length - 1) {
      this.moodIndex += 1;
    }
  }
  masTriste() {
    if (this.moodIndex > 0) {
      this.moodIndex -= 1;
    }
  }
  describirCodigo(code:string) {
    this.codigo = code; 
  }
}
