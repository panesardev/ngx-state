import { ENVIRONMENT_INITIALIZER, inject, Provider } from "@angular/core";
import { AuthEffects, TodosEffects } from "./auth/auth.effects";

export function initializeEffects(): Provider {
  return {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => {
      inject(AuthEffects);
      inject(TodosEffects);
    }
  };
}