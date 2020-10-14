const { DevelopersModel } = require("./developers.model")

const DevelopersResolver = {
    developers: async () => {
        return await DeveloperModel.find({})
        .lean()
        .exec()
    },
    developer: async () => {
        return await DeveloperModel.findOne({})
        .lean()
        .exec()
    }
}

export default DevelopersResolver