const { DevelopersModel } = require("./developers.model")

const DevelopersResolver = {
    getDevelopers: async () => {
        return await DeveloperModel.find({})
        .lean()
        .exec()
    },
    getDeveloper: async () => {
        return await DeveloperModel.findOne({})
        .lean()
        .exec()
    }
}

export default DevelopersResolver