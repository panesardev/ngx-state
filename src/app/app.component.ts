import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from './store/app.store';
import { Login, Logout } from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  template: `
    <router-outlet />
    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>
    <pre><code>{{ state() | json }}</code></pre>
  `,
})
export class AppComponent {
  private store = inject(Store);

  state = this.store.state;

  login() {
    this.store.dispatch(new Login({ email: 'email', password: 'password' }));
  }
  
  logout() {
    this.store.dispatch(new Logout());
  }

}
