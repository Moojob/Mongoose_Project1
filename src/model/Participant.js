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

const ParticipantSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required: true,
    },
    lastname: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    adress: myadress,
    Courses: [mongoose.Types.ObjectId]

})

const ParticipantModel = mongoose.model('Participant', ParticipantSchema);

module.exports = ParticipantModel;
