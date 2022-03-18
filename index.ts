import axios from "axios";

const url = `https://jsonplaceholder.typicode.com/todos/1`;

axios.get(url).then((response) => {
  //   console.log(response.data);

  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  //   console.log(`
  //   the todo with ID: ${ID}
  //   Has a title of: ${title}
  //   is it finished? ${finished}
  //   `);
  logTodo(id, title, completed);
});

// goal of typescript is to catch errors in development, creates early feedback and signals when i need to fix something up

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
   the todo with ID: ${id}
   Has a title of: ${title}
   is it finished? ${completed}
   `);
};
