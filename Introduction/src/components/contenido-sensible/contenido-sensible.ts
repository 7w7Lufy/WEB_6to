import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contenido-sensible',
  imports: [],
  template: `
  <div class="p-2 m-2 rounded-2xl bg-red-300">
    <p class="text-3xl italic text-center">
      Este contenido es sensible
    </p>
    <p class="text-lg text-justify">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam assumenda quam necessitatibus hic cumque, et ut sequi minus officiis voluptates illo quasi ipsa fugiat iure libero molestias optio magni! Mollitia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quaerat. Suscipit nihil harum nam. Hic laboriosam nostrum dolor excepturi perspiciatis. Nesciunt qui itaque veniam tenetur iure explicabo saepe dolore cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio excepturi maxime cupiditate obcaecati iusto adipisci. Quod, veritatis earum possimus ab nobis eligendi cum nisi, amet voluptate iusto, numquam quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero delectus perspiciatis eaque error provident, voluptate minima neque quam iusto enim quisquam odit voluptas dolorem quia adipisci. Corporis, in aspernatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, exercitationem! Fugiat beatae ducimus, autem placeat in aperiam maiores provident sint dignissimos, tempora saepe quos? Voluptas quod recusandae similique vero labore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae recusandae nulla voluptatum mollitia, ratione illum tempora nisi, maiores officiis omnis nostrum exercitationem reprehenderit expedita quos iure vel fuga, excepturi quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti delectus impedit accusantium voluptatem, sit laboriosam neque nulla? Incidunt, ad! Nemo temporibus debitis architecto? Voluptatum praesentium odit debitis dolorem incidunt voluptatem?
    </p>
  </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContenidoSensible {
  constructor() {
    console.log('Componente Contenido Sensible, cargado')
  }
}