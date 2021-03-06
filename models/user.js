const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

  lecture: {
    type: String,
    unique: true,
    title: String,
    date: Date,
    rating: Number,
    views: Number,
    annotations: Number
   },

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },

    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    passwordConf: {
      type: String,
      required: true
    }

}, { timestamps: true }

);


//because mongoose sucks at function by design
delete mongoose.models['User'];

const User = mongoose.model('User', LectureSchema);

module.exports = User;
