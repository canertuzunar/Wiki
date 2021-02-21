import { GameQueries } from '../graphql/query/game.graphql'
import { EngineQueries } from '../graphql/query/engine.grapqhl'
import { DeveloperQueries } from 'src/graphql/query/developer.graphql'

const querySelector = (route: string) => {
    switch(route) {
        case 'games':
            return GameQueries.games
        case 'engines':
            return EngineQueries.engines 
        case 'developers':
            return DeveloperQueries.developers
        default: 
            throw Error('unknown input');
    }
}

export default querySelector