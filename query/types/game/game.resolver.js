import Game from'./game.model'

const GameResolver = {
    games: async () => {
        return await Game.find({}).lean().exec()
    },
    game: async function(args){
       return await Game.findOne({name:args.name})
       .lean()
       .exec() 
    },
    categoryGame: async ({category}) => {
        return await Game.findOne({category: category})
        .lean()
        .exec()
    },
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

