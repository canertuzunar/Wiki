import Game from './game.model'

const GameResolver = {
  games: async () => {
    return await Game.find({}).lean().exec()
  },
  game: async function (args) {
    return await Game.findOne({ name: args.name }).lean().exec()
  },
  categoryGame: async ({ category }) => {
    return await Game.findOne({ category: category }).lean().exec()
  }
}

export default GameResolver
