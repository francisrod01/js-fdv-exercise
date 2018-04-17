const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  surname: String,
  country: String,
  birthday: String
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
