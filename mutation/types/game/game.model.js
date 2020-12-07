import mongoose from'mongoose'

export const GameModel= new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
            text: true
        },
        mainCharacter: {
           type: String,
           required: true
        },
        category: {
            type: String,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
        developers: [{
            name: {
                type: String,
                required: true
            }
        }],
        engine: {
            type: String,
            required: true
        },
        platforms: [{
            name:String
        }],
        release: {
            type: String,
            required: true
        },
        directors:[{
            name: {
                type: String,
                required: true
            }
        }],
        series: {
            type: String,
            required: true
        },
        characters: [
            {
                name: String,
                status: String,
                image: String
            }
        ],
        content: String
})


module.exports = mongoose.model('Game', GameModel);