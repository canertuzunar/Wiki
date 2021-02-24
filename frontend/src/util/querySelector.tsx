import { GameQueries } from '../graphql/query/game.graphql'
import { EngineQueries } from '../graphql/query/engine.grapqhl'
import { DeveloperQueries } from 'src/graphql/query/developer.graphql'

const querySelector = (route: string) => {
    switch(route) {
        case 'games':
            return GameQueries.games
        case 'game':
            return GameQueries.game
        case 'engines':
            return EngineQueries.engines 
        case 'engine':
            return EngineQueries.engine
        case 'developers':
            return DeveloperQueries.developers
        case 'developer':
            return DeveloperQueries.developer
        default: 
            throw Error('unknown input');
    }
}

export default querySelector