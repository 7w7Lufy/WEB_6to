import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  template: `
  <div class="w-fit m-5">
    <img class="rounded-2xl" src="assets/ezioHorizon.jpg" alt="No se pudo cargar la imagen">
  </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Banner { 
  constructor() {
    console.log('Componente Banner cargado')
  }
}