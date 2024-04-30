import { computed, Injectable, Signal, signal } from "@angular/core";
import { Subject } from "rxjs";
import { Action } from "./app.actions";
import { AppState, initialState } from "./app.state";

@Injectable({ providedIn: 'root' })
export class Store {
  private stateSignal = signal<AppState>(initialState);
  private actions = new Subject<Action>();

  readonly state = this.stateSignal.asReadonly();
  readonly actions$ = this.actions.asObservable();

  dispatch(action: Action): void {
    this.actions.next(action);
  }

  select<T>(key: keyof AppState): Signal<T> {
    return computed(() => this.stateSignal()[key] as T);
  }

  setState(state: AppState): void {
    this.stateSignal.set(state);
  }

  patchState(state: Partial<AppState>): void {
    this.stateSignal.update(v => ({ ...v, ...state }));
  }

  resetState(): void {
    this.stateSignal.set(initialState);
  }

}

