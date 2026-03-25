import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-registro',
  imports: [],
  template: `
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
          Registrarse
        </h2>

        <form class="space-y-4">
          
          <!-- Nombre -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre completo"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <!-- Username -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Registrarse
          </button>

        </form>

        <p class="text-sm text-center text-gray-500 mt-4">
          ¿Ya tienes cuenta? 
          <a href="#" class="text-blue-600 hover:underline">Inicia sesión</a>
        </p>

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
export class FormRegistro {
  constructor() {
    console.log('Formulario cargado')
  }
}