const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    label: {
        type:String,
        required: true,
        minlength: 2,
        maxlength: 15
    },
    description: {
        type:String,
        default: "Description du cours"
    },
    volume: {
        type: Number,
        required: true,
        min: 1,
    },
    StateDate: {
        type: Date,
        default: Date.now
    }
})

const CourseModel = mongoose.model('Course', CourseSchema);

module.exports = CourseModel;
