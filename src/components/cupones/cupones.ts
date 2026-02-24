import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cupones',
  imports: [],
  template: `
  <div class="grid grid-cols-2">
    <div class="bg-amber-200 p-2 m-1 rounded-4xl border-4 border-dashed">
      <p class="text-5xl">15%</p> 
      <p class="text-3xl">De descuento en skins</p>  
    </div>
    <div class="bg-amber-500 p-2 m-1 rounded-4xl border-4 border-dashed">
      <p class="text-5xl">10%</p> 
      <p class="text-3xl">De descuento en pase de batalla</p>  
    </div>
  </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cupones { 
  constructor() {
    console.log('Cupones cargados');
  }
}