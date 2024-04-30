import { Component, inject } from '@angular/core';
import { Store } from '../../store/app.store';
import { User } from '../../store/app.state';
import { Login, Logout } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  template: `
    <div>
      {{ user().email }}

      <!-- dispatching actions -->
      <button (click)="login()">Login</button>
      <button (click)="logout()">Logout</button>
    </div>
  `,
})
export class UsersComponent {
  private store = inject(Store);

  user = this.store.select<User>('user');

  login() {
    const user: User = {
      email: 'email',
      password: 'password'
    };
    this.store.dispatch(new Login(user));
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
