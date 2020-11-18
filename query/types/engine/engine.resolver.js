const { EngineModel } = require('./engine.model')

export const EngineResolver = {
  engines: async () => {
    return await EngineModel.find({}).lean().exec()
  },
  engine: async (args) => {
    return await EngineModel.findOne({ name: args.name })
  }
}
