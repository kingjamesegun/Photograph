const mongoose = require("mongoose");
const Schema = mongoose.Schema

const BookingScheme = new Schema({      
    user: {
        type: Schema.ObjectId,
        ref: "User"
    },
    bookingStart: Date,
    bookingEnd: Date,
    startHour: Number,
    duration: Number,
    phototype: {
        type: String,
        required: true
    },
    event: {
        type: Schema.ObjectId,
        ref: "Event"
    }
      
}, {timestamps: true});

const Post = mongoose.model("Booking", BookingScheme);

module.exports = Post;