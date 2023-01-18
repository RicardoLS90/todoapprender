const { Router}= require('express');
const { getAllUsers, getUserById,createUser,updateUsers,deletUser, getUsersWithTask,getUserWithCategories}= require('../controllers/users.controlers.js')
const authMiddleware= require('../middlewares/auth.middelware');

const router= Router();

router.get('/users',authMiddleware,getAllUsers);

router.get('/users/:id',authMiddleware,getUserById);

router.get('/users/:id/categories',authMiddleware, getUserWithCategories);

//obtener a un usuario con sus tareas
router.get('/users/:id/todos',authMiddleware, getUsersWithTask);

router.post('/users', createUser);

router.put('/users/:id',authMiddleware,updateUsers);

router.delete('/users/:id',authMiddleware, deletUser);


module.exports= router;