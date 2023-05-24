const todoService = require('../services/todoService');

// Route handler to create a new todo item
const createTodo = async (req, res) => {
  try {
    const todoData = req.body;
    const createdTodo = await todoService.createTodo(todoData);
    res.status(201).json(createdTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route handler to get all todo items
const getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route handler to get a single todo item by its ID
const getTodoById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await todoService.getTodoById(todoId);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route handler to update a todo item by its ID
const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const updatedData = req.body;
    const updatedTodo = await todoService.updateTodo(todoId, updatedData);
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Route handler to delete a todo item by its ID
const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    await todoService.deleteTodo(todoId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo
};
