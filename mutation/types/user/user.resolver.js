import  UserModel  from "./user.model"
import bcrypt from'bcrypt'
const UserResolver = {
    createUser: async (args) => {
        const hashPass = await bcrypt.hash(args.input.password, 10)
        const User = { 
            username: args.input.username,
            password: hashPass,
            email: args.input.email
        }
        return await UserModel.create(User)
    }
}

export default UserResolver