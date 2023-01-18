const Categories = require('../models/categories.model');
const Todos = require('../models/todos.model');
const Todos_categories = require('../models/todos_categories.model');

class todoServices {
  static async getAll() {
    try{
      const result= await Todos.findAll();
      return result
    }catch(error){
      throw new error
    }
  }
  static async getById(id) {
    try{
      const result=await Todos.findByPk(id)
      return result
    } catch(error){
      throw new error 
    }
  }
  static async create(user){
    try{
      const result=await Todos.create(user)
      return result;
    } catch(error){
      throw new error
    }
  }
  static async updateUser (id, field){
    try {
      const result = await Todos.update(field, {
          where: {id}
      });
      return result;
    } catch (error) {
      throw error;
    }
   }
   static async deleteUser (id){
    try {
        const result = await Todos.destroy({where: {id}});
        return result;
    } catch (error) {
        throw error;
    }

 }
 static async  getWithCategories(id) {
  try {
    const result= await Todos.findOne({
      where:{id},
      include: {
        model: Todos_categories,
        as:"categories",
        attributes: ['id'],
        include: {
          model: Categories,
          as: "categories"
        }
      }
    })
    return result;
  } catch (error){
    throw error 
  }
 }
}

module.exports= todoServices;