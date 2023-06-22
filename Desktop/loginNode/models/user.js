const mongoose = require('mongoose');
import {role} from "/role.ts";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  adresse: {
    type: String,
    required: true
  },
  age: {
    type: int,
    required: true
  },
  genre : {
    type:String, 
    enum : ['femme','homme'],
    default: 'homme'
  },
  role: {
    type:String, 
    enum:role,
    default: role.normal,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
