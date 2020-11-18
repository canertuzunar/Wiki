import mongoose from 'mongoose'

export const DevelopersModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  since: {
    type: String,
    required: true
  },
  games: [
    {
      type: String,
      required: true
    }
  ],
  socialLinks: [
    {
      name: {
        type: String
      },
      url: {
        type: String
      }
    }
  ]
})
