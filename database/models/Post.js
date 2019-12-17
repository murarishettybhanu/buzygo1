const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  email: {
    String,
    unique: true
  },

  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
