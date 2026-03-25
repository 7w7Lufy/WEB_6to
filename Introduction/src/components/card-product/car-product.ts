import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-product',
  imports: [],
  template: `
  <div class="bg-gray-200 m-2 rounded-3xl pb-3">
    <img class="rounded-2xl" src="assets/ezioHorizon.jpg" alt="No se pudo cargar la imagen">
    
    <div class="flex items-center justify-between">
      <h6 class="font-light my-3 mx-2 text-2xl">Nombre del producto</h6>
      <button class="bg-pink-500 text-zinc-50 p-2 rounded-xl my-3 mx-2">Comprar</button>
    </div>
    
  </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProduct { }