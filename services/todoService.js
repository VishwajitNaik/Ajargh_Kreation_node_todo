const Todo = require('../models/todoModel');

// Function to create a new todo item
const createTodo = async (todoData) => {
  try {
    const todo = new Todo(todoData);
    const createdTodo = await todo.save();
    return createdTodo;
  } catch (error) {
    throw new Error('Failed to create todo item');
  }
};

// Function to get all todo items
const getTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (error) {
    throw new Error('Failed to fetch todo items');
  }
};

// Function to get a single todo item by its ID
const getTodoById = async (todoId) => {
  try {
    const todo = await Todo.findById(todoId);
    return todo;
  } catch (error) {
    throw new Error('Failed to fetch todo item');
  }
};

// Function to update a todo item by its ID
const updateTodo = async (todoId, updatedData) => {
  try {
    const todo = await Todo.findByIdAndUpdate(todoId, updatedData, { new: true });
    return todo;
  } catch (error) {
    throw new Error('Failed to update todo item');
  }
};

// Function to delete a todo item by its ID
const deleteTodo = async (todoId) => {
  try {
    await Todo.findByIdAndRemove(todoId);
  } catch (error) {
    throw new Error('Failed to delete todo item');
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo
};
