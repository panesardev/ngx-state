import { filter, Observable, tap } from "rxjs";
import { Store } from "../app.store";
import { Login, Logout } from "./auth.actions";

export function authEffects(store: Store): Observable<any>[] {
  return [
    store.actions$.pipe(
      filter(action => action instanceof Login),
      tap({
        next: action => store.patchState({ user: action.payload }),
        error: e => console.log(e),
      }),
    ),
    store.actions$.pipe(
      filter(action => action instanceof Logout),
      tap({
        next: () => store.reset(),
        error: e => console.log(e),
      }),
    ),
  ];
}
