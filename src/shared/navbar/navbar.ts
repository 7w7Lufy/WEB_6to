import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
<nav class="bg-gray-300 border-b border-gray-700 px-6 py-4 flex justify-between items-center shadow-sm">
  <span class="text-xl font-bold text-blue-600">MiProyecto</span>
  <div class="space-x-4">
    <a class="text-gray-600 hover:text-blue-500 transition cursor-pointer" routerLink="/directivas">Inicio</a>
    <a class="text-gray-600 hover:text-blue-500 transition cursor-pointer" routerLink="/directivas">Directivas</a>
    <a class="text-gray-600 hover:text-blue-500 transition cursor-pointer" routerLink="/metodos-arrays">Metodos de Arrays</a>
  </div>
</nav>`,
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar { }
