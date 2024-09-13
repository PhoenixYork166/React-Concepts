import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    const insertAt = 0;
    const nextTodos = [
      // Items to be inserted at before all items in array list
      ...todos.slice(0, insertAt),
      {id: nextId++, title: title, done: false},
      // Items to be appended to top of array list
      ...todos.slice(insertAt)
    ];
    setTodos(nextTodos);
    
    // todos.push({
    //   id: nextId++,
    //   title: title,
    //   done: false
    // });
  }

  function handleChangeTodo(nextTodo) {
    
    setTodos(todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return {
          ...todo,
          title: nextTodo.title,
          done: nextTodo.done,
        }
      } else {
        return todo
      }
    }));

        // const todo = todos.find(t =>
    //   t.id === nextTodo.id
    // );
    // todo.title = nextTodo.title;
    // todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    // const index = todos.findIndex(t =>
    //   t.id === todoId
    // );
    // todos.splice(index, 1);
    setTodos(todos.filter(todo => {
      return todo.id !== todoId      
    }))
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
