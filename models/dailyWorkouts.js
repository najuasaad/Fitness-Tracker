const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailyWorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Workout name is required"
    },

    type: { // type is either cardio or resistance?
        type: String,
        trim: true,
        required: true
    },

    distance: {
        type: Number,
        trim: true,
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

const dailyWorkout = mongoose.model("daily-workout", dailyWorkoutSchema);

module.exports = dailyWorkout;