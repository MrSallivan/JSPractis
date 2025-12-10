import {saveTodosIntoLocalStorage, getTodosFromLocalStorage} from './utils.js'

const addTodoInput = document.querySelector("[data-add-todo-input]")
const addTodoBtn = document.querySelector("[data-add-todo-btn]")
const todosContainer = document.querySelector("[data-todo-container]");
const todoTemplate = document.querySelector("[data-todo-template]");
