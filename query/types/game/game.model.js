import mongoose from 'mongoose'

export const GameModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
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
  developers: {
    type: String,
    required: true
  },
  engine: {
    type: String,
    required: true
  },
  platforms: [
    {
      name: {
        type: String,
        required: true
      }
    }
  ],
  release: {
    type: String,
    required: true
  },
  directors: [
    {
      name: {
        type: String,
        required: true
      }
    }
  ],
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
  ]
})

module.exports = mongoose.model('Game', GameModel)
