const { DevelopersModel } = require("./developers.model")

const DevelopersResolver = {
    addDevelopers: async (args) => {
        return await DevelopersModel.create(args.input)
    },
    removeDevelopers: async (args) => {
        return await Game.findOneAndRemove({name: args.name})
        .lean()
        .exec()
    },
    updateGame: async (args) => {
        return Game.findOneAndUpdate(args.name, args.input, {new:true})
        .lean()
        .exec()
    }
}

export default DevelopersResolver