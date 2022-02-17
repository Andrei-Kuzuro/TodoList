export interface ITodoItem {
  text: string;
  id: string;
  time: string;
  completed: boolean;
}

export interface ITodosState {
  todos: ITodoItem[];
}

const defaultState: ITodosState = {
  todos: [],
};

export const todosReducer = (state = defaultState, action: any) => {
  if (action.type === "ADD_TODO") {
    const date = new Date();

    const newTodo = {
      id: "id" + Math.random().toString(16).slice(2),
      text: action.text,
      completed: false,
      time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    };

    const newTodos = [...state.todos, newTodo];

    return {
      todos: newTodos,
    };
  }

  if (action.type === "DELETE_TODO") {
    const newTodos = state.todos.filter((item) => {
      if (item.id === action.id) {
        return false;
      }
      return true;
    });

    return {
      todos: newTodos,
    };
  }

  if (action.type === "COMPLETE_TODO") {
    const newTodos = state.todos.map((item) => {
      if (item.id === action.id) {
        item.completed = !item.completed;
      }
      return item;
    });

    return {
      todos: newTodos,
    };
  }

  return state;
};
