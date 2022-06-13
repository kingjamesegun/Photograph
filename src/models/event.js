const mongoose = require("mongoose");
const Schema = mongoose.Schema

const EventScheme = new Schema({      
    eventType:{
        type: String
    }
      
}, {timestamps: true});

const Event= mongoose.model("Event", EventScheme);

module.exports = Event;