const { ValidationErrorItem } = require('sequelize');
const todoServices = require ('../services/todos.service');

const getAllTodos=async (req,res)=>{
  try{
    const result= await todoServices.getAll();
    res.status(200).json(result)
  } catch(error){
    res.status(400).json(error.message)
  }
};

const getTodoById=async(req,res)=>{
  try{
  const {id}= req.params;
  const result= await todoServices.getById(id)
  res.status(200).json(result)
  } catch(error){
    res.status(400).json(error.message)
  }
};

const createTodo=async(req,res)=>{
  try{
    const newUser=req.body;
    const result= await todoServices.create(newUser)
    res.status(201).json(result)
  }catch(error){
    res.status(400).json(error.message) 
  }

};

const updateTodos=async(req,res)=>{
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await todoServices.updateUser(id, field);
    res.status(201).json(result);
} catch (error) {
    res.status(400).json(error.message);
}
};

const deleteTodo=async(req,res)=>{
  try {
    const {id}= req.params;
    const result = await todoServices.deleteUser(id);
    res.status(200).json(result);
 } catch (error) {
     res.status(400).json(error.message);
 }

};

const getTodosWithCategories=async(req,res)=>{
  try {
    const {id}= req.params;
    const result= await todoServices.getWithCategories(id);
    res.json({
      message:"enviando tareas con categorias",
      data: result
  });
  }catch(error){
    res.status(400).json({
      error: error.message,
      details: error.stack
    })
  }
}

module.exports= {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodos,
  deleteTodo,
  getTodosWithCategories
}
