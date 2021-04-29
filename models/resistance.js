const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Workout name is required"
    },

    weight: {
        type: Number,
        trim: true,
    },

    sets: {
        type: Number,
        trim: true,
    },
    
    reps: {
        type: Number,
        trim: true,
    },

    duration: {
        type: Number,
        trim: true,
    }
});

const Resistance = mongoose.model("resistance", resistanceSchema);

module.exports = Resistance;