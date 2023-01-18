const userServices = require ('../services/user.service')

const getAllUsers=async (req,res)=>{
  try{
    const result= await userServices.getAll();
    res.status(200).json(result)
  } catch(error){
    res.status(400).json(error.message)
  }
};

const getUserById=async(req,res)=>{
  try{
  const {id}= req.params;
  const result= await userServices.getById(id)
  res.status(200).json(result)
  } catch(error){
    res.status(400).json(error.message)
  }
};

const getUsersWithTask= async (req,res)=>{
  try{
    const {id}=req.params;
    const result= await userServices.getWithTask(id);
    res.json(result); //por defecto se responde con status 200
  }catch (error){
    res.status(400).json(error.message);
  }
}

const getUserWithCategories= async(req,res)=> {
  try{
    const {id}=req.params;
    const result= await userServices.getWithCategories(id);
    res.json(result)
  } catch(error){
    res.status(400).json(error.message);
  }
}

const createUser=async(req,res)=>{
  try{
    const newUser=req.body;
    const result= await userServices.create(newUser)
    res.status(201).json(result)
  }catch(error){
    res.status(400).json(error.message) 
  }

};

const updateUsers=async(req,res)=>{
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await userServices.updateUser(id, field);
    res.status(201).json(result);
} catch (error) {
    res.status(400).json(error.message);
}
};

const deletUser=async(req,res)=>{
  try {
    const {id}= req.params;
    const result = await userServices.deleteUser(id);
    res.status(200).json(result);
 } catch (error) {
     res.status(400).json(error.message);
 }

};


module.exports= {
  getAllUsers,
  getUserById,
  getUsersWithTask,
  createUser,
  updateUsers,
  deletUser,
  getUserWithCategories
}
