const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
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
    adresse: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        enum: ['femme', 'homme'],
        default: 'homme'
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    premium:{
        type:Boolean,
        default:'no'
    }
},
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
