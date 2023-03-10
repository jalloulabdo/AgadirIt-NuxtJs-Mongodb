const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
  username: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

module.exports = mongoose.models.User ||mongoose.model('User', User)