const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
