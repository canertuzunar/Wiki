import  UserModel  from "./user.model"
import bcrypt from'bcrypt'

const UserResolver = {
    user: async (args) => {

        const user = await UserModel.findOne({
            username: args.username
        })
        .lean()
        .exec()

        const valid = await bcrypt.compare(args.password, user.password)
        console.log(valid)
        if(!valid){
            throw new Error('its not valid')
        }

        return user
    }
}

export default UserResolver