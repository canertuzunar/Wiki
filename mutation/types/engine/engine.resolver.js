const EngineModel  = require("./engine.model")

const EngineResolver = {
    addEngine: async (args) => {
        return await EngineModel.create(args.input)
        .lean()
        .exec()
    },
    removeEngine: async (args) => {
        return await EngineModel.findOneAndRemove(args.name)
        .lean()
        .exec()
    },
    updateEngine: async (args) => {
        return await EngineModel.findOneAndUpdate(name, args.input, {new:true})
        .lean()
        .exec()
    }
}

export default EngineResolver