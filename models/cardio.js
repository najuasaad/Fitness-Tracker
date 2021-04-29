const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Workout name is required"
    },

    distance: {
        type: Number,
        trim: true,
    },

    duration: {
        type: Number,
        trim: true,
    }
});

const Cardio = mongoose.model("cardio", cardioSchema);

module.exports = Cardio;