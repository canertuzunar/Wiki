const Developers = require('./developers.model')

const DevelopersResolver = {
  developers: async () => {
    return await Developers.find({}).lean().exec()
  },
  developer: async () => {
    return await Developers.findOne({}).lean().exec()
  }
}

export default DevelopersResolver
