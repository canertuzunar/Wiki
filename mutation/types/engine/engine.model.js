import mongoose from'mongoose'

export const EngineModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    games: [
        {
            type: String,
            required:true,
        }
    ],
    owner: {
        type: String,
        required: true 
    },
    license: {
        type: String,
        required: true  
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Engine", EngineModel)