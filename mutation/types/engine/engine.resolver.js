const EngineModel  = require("./engine.model")

const EngineResolver = {
    addEngine: async ({input}) => {
        return await EngineModel.create(input)
        .lean()
        .exec()
    },
    removeEngine: async ({name}) => {
        return await EngineModel.findOneAndRemove(name)
        .lean()
        .exec()
    },
    updateEngine: async ({name, input}) => {
        return await EngineModel.findOneAndUpdate(name, input, {new:true})
        .lean()
        .exec()
    }
}

export default EngineResolver