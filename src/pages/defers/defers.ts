
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Banner } from "../../components/banner/banner";
import { CardProduct } from "../../components/card-product/car-product";
import { Cupones } from '../../components/cupones/cupones';

@Component({
  selector: 'app-defers',
  imports: [Banner, CardProduct, Cupones],
  templateUrl: './defers.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Defers { 
  
}