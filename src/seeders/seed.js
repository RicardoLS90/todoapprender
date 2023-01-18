const db= require('../utils/database')
const Users= require('../models/users.model')
const Todos= require('../models/todos.model')
const Categories= require('../models/categories.model')
const TodoCategories= require('../models/todos_categories.model')



const users= [
  {username: 'ricardo', email: 'rleons40@gmail.com', password: '1234'},
  {username: 'miguel', email: 'rleons30@gmail.com', password: '1234'},
  {username: 'leon', email: 'rleons20@gmail.com', password: '1234'},
];
const todos=[
  {tittle: 'rstudiar node', description: 'asisistir a la clase', userId: 1},
  {tittle: 'pasear al perro', description: 'asisistir a la clase', userId: 1},
  {tittle: 'lavar platos', userId: 2},
  {tittle: 'ir al chequeo mensual', description: 'asisistir a la clase', userId: 3}
];
const categories=[
  
    {name: 'personal', userId:1},
  {name: 'educacion', userId:1},
  {name: 'salud', userId:1},
  {name: 'trabajo', userId:2},
  {name: 'hogar', userId:2},
  {name: 'cocina', userId:2},
  {name: 'deporte', userId:2},
  {name: 'ocio', userId:2},
  {name: 'financiero', userId:3},
  {name: 'entretenimiento', userId:2},
  
];
const todosCategories=[
  {categoryId:1, todoId:1},
  {categoryId:2, todoId:1},
  {categoryId:4, todoId:1},
  {categoryId:1, todoId:2},
  {categoryId:7, todoId:2},
  {categoryId:10, todoId:2},
  {categoryId:3, todoId:2},
  {categoryId:5, todoId:3},
  {categoryId:6, todoId:3},
  {categoryId:1, todoId:4},
  {categoryId:3, todoId:4}
];



db.sync({force:false})
  .then(()=>{
    console.log('iniciando con el seed de prueba');
    users.forEach((user)=>Users.create(user));
    setTimeout(()=> {
      todos.forEach((todo)=>Todos.create(todo));
    },100);
    setTimeout(()=>{
      categories.forEach((category)=>Categories.create(category));
    },200);
    setTimeout(()=>{
      todosCategories.forEach((tc)=>TodoCategories.create(tc));
    },300);
  })
  .catch((error)=> console.log(error));