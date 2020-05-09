const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    required: true,
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      avatar: {
        required: true,
        type: String,
      },
      date: {
        type: Date,
        defaul: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    defaul: Date.now,
  },
});
module.exports = Post = mongoose.model('post', PostsSchema);
