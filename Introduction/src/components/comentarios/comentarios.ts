import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  imports: [],
  template: `
  <div class="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">
        Deja un comentario
      </h2>

      <form class="space-y-4">
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input 
            type="text"
            placeholder="Tu nombre"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Comentario
          </label>
          <textarea 
            rows="4"
            placeholder="Escribe tu comentario..."
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Publicar comentario
        </button>

      </form>

    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comentarios { }