const Engine = require('./engine.model')

const EngineResolver = {
  engines: async () => {
    return await Engine.find({}).lean().exec()
  },
  engine: async (args) => {
    return await Engine.findOne({ name: args.name })
  }
}


export default EngineResolver