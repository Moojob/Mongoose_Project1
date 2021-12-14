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
    Name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    adress: myadress,
    courses: [mongoose.Types.ObjectId],

})

const ParticipantModel = mongoose.model('Participant', ParticipantSchema);

module.exports = ParticipantModel;
