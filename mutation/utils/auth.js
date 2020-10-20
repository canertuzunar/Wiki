import jwt from'jsonwebtoken'
import UserModel from '../types/user/user.model';
import bcrypt from'bcrypt'
const authentication = async (req, res, next) => {
   const {username, password, email} = req.body;
   if(!username || !password) {
       return res.status(403).json({
           success: false,
           message: "Username or Password can not be empty"
       })

   }
   const user = await UserModel.findOne({username: username}).lean().exec()
   const valid = await bcrypt.compare(password, user.password)
   if(!valid){
       res.status(400).json({
           success: false,
           message: "Wrong Password or Username"
       })
   }
   jwt.sign({
       username: username,
       password: user.password
   }, 'secretKey', {expiresIn: '1d' }, (err, token) => {
       res.json({
           token
       })
   })

}

export default authentication