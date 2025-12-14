import { saveTodosIntoLocalStorage, getTodosFromLocalStorage } from "./utils.js"

const addTodoInput = document.querySelector("[data-add-todo-input]")
const addTodoBtn = document.querySelector("[data-add-todo-btn]")
const todosContainer = document.querySelector("[data-todo-container]")
const todoTemplate = document.querySelector("[data-todo-template]")

let todoList = getTodosFromLocalStorage()
addTodoBtn.addEventListener("click", () => {
  if (addTodoInput.value.trim()) {
    const newTodo = {
      id: Date.now(),
      text: addTodoInput.value.trim(),
      completed: false,
      createdAt: new Date()
    }
    todoList.push(newTodo)
    addTodoInput.value = ""
    saveTodosIntoLocalStorage(todoList)
    renderTodos()
  }
})

const createTodoLayout = (todo) => {
  const todoElement = document.importNode(todoTemplate.content, true)
  const checkbox = todoElement.querySelector("[data-todo-checkbox]")
  checkbox.checked = todo.completed
  const todoText = todoElement.querySelector("[data-todo-text]")
  todoText.textContent = todo.text
  const todoDate = todoElement.querySelector("[data-todo-date]")
  todoDate.textContent = todo.createdAt
  const removeTodoBtn = todoElement.querySelector("[remove-todo-btn]")

  return todoElement
}

const renderTodos = () => {
  todosContainer.innerHTML = ""
  todoList.forEach((todo) => {
    const todoElement = createTodoLayout(todo)
    todosContainer.append(todoElement)
  })
}
