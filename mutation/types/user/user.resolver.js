import  UserModel  from "./user.model"
import bcrypt from'bcrypt'
const UserResolver = {
    user: async (args) => {
        const {username, password} = args
        const user = await UserModel.findOne({
            username: username
        })
        .lean()
        .exec()

        const valid = await bcrypt.compare(password, user.password)
        if(!valid){
            throw new Error('its not valid')
        }

        return user
    },
    createUser: async (args) => {
        const {username, password, email} = args.input
        const hashPass = await bcrypt.hash(password, 10)
        const User = {username, password: hashPass, email}
        return await UserModel.create(User)
    },
    removeUser: async (args) => {
        return await UserModel.findOneAndRemove({name:args.name})
        .lean()
        .exec()
    },
    updateUser: async (args) => {
        const {name, input} = args
        return await UserModel.findOneAndUpdate(name, input, {new: true})
        .lean()
        .exec() 
    }
}


export default UserResolver