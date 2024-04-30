import { Action } from "../app.actions";

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

export class FetchTodos extends Action {
  constructor() {
    super(FetchTodos.name);
  }
}