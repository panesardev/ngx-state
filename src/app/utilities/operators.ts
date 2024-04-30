import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, Subscription } from 'rxjs';

export function runEffects(...sources: Observable<unknown>[]): Subscription[] {
  return sources.map(source => source.pipe(takeUntilDestroyed()).subscribe());
}
