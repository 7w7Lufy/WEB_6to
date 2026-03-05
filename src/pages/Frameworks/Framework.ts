import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworks',
  imports: [],
  templateUrl: './framework.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class FrameworksComponent {
  frameworks: string[] = ['Angular', 'React', 'Otro', 'Otro mas'];

  vaciarArray() {
    this.frameworks = [];
  }
}
