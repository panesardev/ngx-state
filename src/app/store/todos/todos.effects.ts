import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { filter, Observable, switchMap, tap } from "rxjs";
import { Todo } from "../app.state";
import { Store } from "../app.store";
import { FetchTodos } from "./todos.actions";

export function todoEffects(store: Store): Observable<any>[] {
  const http = inject(HttpClient);
  return [
    store.actions$.pipe(
      filter(action => action instanceof FetchTodos),
      switchMap(() => http.get<Todo[]>(`your-backend-url`)),
      tap({
        next: todos => store.patchState({ todos }),
        error: e => console.log(e),
      }),
    ),
  ];
}