const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter exercise name"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Please enter duration of exercise"
            },
            weight: {
                type: Number,
                trim: true
            },
            reps: {
                type: Number,
                trim: true
            },
            sets: {
                type: Number,
                trim: true
            },
            distance: {
                type: Number,
                trim: true
            }
        },
        
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;