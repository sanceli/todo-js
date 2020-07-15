import './styles.css';

import { Todo, TodoList}  from './classes';
import { crearTodoHtml } from './js/componentes.js';



export const todoList = new TodoList();

console.log( todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo) );

const newTodo = new Todo('Aprender JavaScript');

if(todoList.length > 0) {

    todoList.todos[0].imprimirClase();
}

console.log('todos', todoList.todos);

