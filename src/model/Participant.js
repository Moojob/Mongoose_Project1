const mongoose = require('mongoose');
const Course = require("./course");

let myadress = ({
    city: {
        type: String,
        default: "My adresse"
    },
    street: {
        type: String,
        default: "My Street"
    }
});

// let mycourses = ({
//     label: String,
//     volume: Number
// })

const ParticipantSchema = new mongoose.Schema({
    Name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    adress: myadress,
    Courses: []

})

const ParticipantModel = mongoose.model('Participant', ParticipantSchema);

module.exports = ParticipantModel;
