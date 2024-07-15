import { Action } from "../app.store";

export class FetchTodos extends Action {
  constructor() {
    super(FetchTodos.name);
  }
}