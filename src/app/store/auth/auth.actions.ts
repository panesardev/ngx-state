import { Action } from "../app.store";

export class Login extends Action {
  constructor(public override payload: { email: string, password: string }) {
    super(Login.name, payload);
  }
}

export class Logout extends Action {
  constructor() {
    super(Logout.name);
  }
}
