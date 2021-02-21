const { DevelopersModel } = require("./developers.model")

const DevelopersResolver = {
    addDevelopers: async ({input}) => {
        return await DevelopersModel.create(input)
    },
    removeDevelopers: async ({name}) => {
        return await Game.findOneAndRemove({name: name})
        .lean()
        .exec()
    },
    updateGame: async ({name, input }) => {
        return Game.findOneAndUpdate(name, input, {new:true})
        .lean()
        .exec()
    }
}

export default DevelopersResolver