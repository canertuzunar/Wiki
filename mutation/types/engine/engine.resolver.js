const { EngineModel } = require("./engine.model")

export const EngineResolver = {
    addEngine: async (args) => {
        return await EngineModel.create(args.input)
        .lean()
        .exec()
    },
    removeEngine: async (args) => {
        return await EngineModel.findOneAneRemove(args.name)
        .lean()
        .exec()
    },
    updateGame: async (args) => {
        return EngineModel.findOneAndUpdate(args.name, args.input, {new:true})
        .lean()
        .exec()
    }
}