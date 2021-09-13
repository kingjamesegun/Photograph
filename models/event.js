const mongoose = require("mongoose");
const Schema = mongoose.Schema

const BookingScheme = new Schema({      

      
}, {timestamps: true});

const Post = mongoose.model("Event", BookingScheme);

module.exports = Post;