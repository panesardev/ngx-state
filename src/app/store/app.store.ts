import { computed, Injectable, Signal, signal } from "@angular/core";
import { Subject } from "rxjs";
import { AppState, initialState } from "./app.state";

export class Action {
  constructor(public readonly type: string, public payload?: any) {}
}

@Injectable({ providedIn: 'root' })
export class Store {
  private stateSignal = signal<AppState>(initialState);
  private actions = new Subject<Action>();

  state = this.stateSignal.asReadonly();
  actions$ = this.actions.asObservable();

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
    console.log(state);
    
    this.stateSignal.update(v => ({ ...v, ...state }));
  }

  reset(): void {
    this.stateSignal.set(initialState);
  }

}
