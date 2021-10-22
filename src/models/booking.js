const mongoose = require("mongoose");
const Schema = mongoose.Schema

const BookingScheme = new Schema({      
    user: {
        type: Schema.ObjectId,
        ref: "User"
    },
    bookingStart: String,
    bookingEnd: String,
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

const Booking = mongoose.model("Booking", BookingScheme);

module.exports = Booking;