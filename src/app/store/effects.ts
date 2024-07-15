import { ENVIRONMENT_INITIALIZER, inject, Provider } from "@angular/core";
import { Store } from "./app.store";
import { authEffects } from "./auth/auth.effects";
import { todoEffects } from "./todos/todos.effects";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

export function initializeEffects(): Provider {
  return {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => {
      const store = inject(Store);
      
      const effects = [
        ...authEffects(store), 
        ...todoEffects(store),
      ];

      for (const effect of effects) {
        effect.pipe(takeUntilDestroyed()).subscribe();
      }
    }
  };
}
