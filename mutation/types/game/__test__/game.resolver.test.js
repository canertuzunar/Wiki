const { GameModel } = require("../game.model")
const { default: GameResolver } = require("../game.resolver")

describe('Resolvers', () => {
    test('game must has base filed', async() => {
        const args = {
            input: {
                "name": "Doom Eternal",
                "mainCharacter": "Doom Slayer",
                "category": "FPS",
                "characters": [{
                    "name": "Archon of Hell",
                    "status": "Enemy",
                    "image": "http://url"
                }],
            }
        } 

        const result = await GameResolver.addGame(args.input)
        
        Object.keys(args.input).forEach(field => {
            expect(result[field]).toBe(args.input[field])
        })

    })
})