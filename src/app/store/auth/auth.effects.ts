import { inject, Injectable } from "@angular/core";
import { filter, switchMap, tap } from "rxjs";
import { Store } from "../app.store";
import { FetchTodos, Login, Logout } from "./auth.actions";
import { runEffects } from "../../utilities/operators";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../app.state";

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  private store = inject(Store);

  login = this.store.actions$.pipe(
    filter(action => action instanceof Login),
    tap({
      next: action => this.store.patchState({ user: action.payload }),
      error: e => console.log(e),
    }),
  );

  logout = this.store.actions$.pipe(
    filter(action => action instanceof Logout),
    tap({
      next: () => this.store.resetState(),
      error: e => console.log(e),
    }),
  );

  constructor() {
    runEffects(this.login, this.logout);
  }

}


@Injectable({ providedIn: 'root' })
export class TodosEffects {
  private http = inject(HttpClient);
  private store = inject(Store);

  fetchTodos = this.store.actions$.pipe(
    filter(action => action instanceof FetchTodos),
    switchMap(() => this.http.get<Todo[]>(`your-backend-url`)),
    tap({
      next: todos => this.store.patchState({ todos }),
      error: e => console.log(e),
    }),
  );

  constructor() {
    runEffects(this.fetchTodos);
  }
  
}