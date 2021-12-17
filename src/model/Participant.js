const mongoose = require('mongoose');

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
    FirstName: {
        type:String,
        required: true,
    },
    LastName: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    adress: myadress,
    courses: [
        {
            type: mongoose.Types.ObjectId, 
            ref: 'Course'
        }
    ]

})

const ParticipantModel = mongoose.model('Participant', ParticipantSchema);

module.exports = ParticipantModel;
