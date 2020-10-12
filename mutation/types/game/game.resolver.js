import Game from'./game.model'

const GameResolver = {

    addGame: async ({input}) => {
        return Game.create(input)
    },
    removeGame: async ({name}) => {
        return Game.findOneAndRemove({name:name})
        .lean()
        .exec()
    },
    updateGame: async ( {name, input}) => {
        return Game.findOneAndUpdate(name, input, {new: true})
        .lean()
        .exec()
    }
}

export default GameResolver

