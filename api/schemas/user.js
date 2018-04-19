const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  surname: String,
  country: Object,
  birthday: String
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
