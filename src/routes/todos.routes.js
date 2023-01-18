const { Router}= require('express');
const { getAllTodos, getTodoById,createTodo,updateTodos,deleteTodo,getTodosWithCategories}= require('../controllers/todos.controlers.js')
const authMiddleware= require('../middlewares/auth.middelware');


const router= Router();

router.get('/todos',authMiddleware, getAllTodos);

router.get('/todos/:id',authMiddleware,getTodoById);

router.get('/todos/:id/categories',authMiddleware,getTodosWithCategories);

router.post('/todos',authMiddleware, createTodo);

router.put('/todos/:id',authMiddleware,updateTodos);

router.delete('/todos/:id', authMiddleware,deleteTodo);

module.exports= router;