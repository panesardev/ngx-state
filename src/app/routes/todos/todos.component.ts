import { Component, inject } from '@angular/core';
import { Store } from '../../store/app.store';
import { Todo } from '../../store/app.state';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  template: `
    <div>
      @for (todo of todos(); track todo.id) {
        <h1>{{ todo.text }}</h1>
      }
    </div>
  `,
})
export class TodosComponent {
  private store = inject(Store);

  todos = this.store.select<Todo[]>('todos');

}
