const jwt= require('jsonwebtoken');
require('dotenv').config()

const authMiddleware= (req,res,next)=> {
  let {authorization: token}= req.headers;
  token= token.replace('Bearer ','');
  console.log(token)
  jwt.verify(token, 
    process.env.JWT_SECRET, 
    {algorithms:'HS512'},(error,decoded)=>{
      if (error){
        res.status(400).json({
          error: 'invalid token',
          message: 'el token no es valido, envia el token correcto'
      })
      } else {
        console.log(decoded)
        next();
      }
    })
}

module.exports= authMiddleware;