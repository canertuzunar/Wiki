import { GameQueries } from '../graphql/query/game.graphql'
import { EngineQueries } from '../graphql/query/engine.grapqhl'

const querySelector = (route: string) => {
    switch(route) {
        case 'games':
            return GameQueries.games
        case 'engines':
            return EngineQueries.engines 
        default: 
            throw Error('unknown input');
    }
}

export default querySelector