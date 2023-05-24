const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware.js');

// Route to create a new todo item
router.post('/todos', authMiddleware, todoController.createTodo);

// Route to get all todo items
router.get('/todos', authMiddleware, todoController.getTodos);

// Route to get a single todo item by its ID
router.get('/todos/:id', authMiddleware, todoController.getTodoById);

// Route to update a todo item by its ID
router.put('/todos/:id', authMiddleware, todoController.updateTodo);

// Route to delete a todo item by its ID
router.delete('/todos/:id', authMiddleware, todoController.deleteTodo);

module.exports = router;
