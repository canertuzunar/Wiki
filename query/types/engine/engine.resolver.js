const { EngineModel } = require("./engine.model")

export const EngineResolver = {
    engine: async () => {
        return await EngineModel.findOne({})
        .lean()
        .exec()
    }
}