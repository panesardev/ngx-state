export interface AppState {
  user: User;
  todos: Todo[];
}

export interface User {
  email: string;
  password: string;
}

export interface Todo {
  id: string;
  text: string;
}

export const initialState: AppState = {
  user: {
    email: '',
    password: '',
  },
  todos: [],
}

