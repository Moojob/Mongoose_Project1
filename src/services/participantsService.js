const mongoose = require('mongoose');
const Participant= require('../model/Participant')
const Course = require('../model/course')

const getAllPartcipants = async (req, res) => {
    try {
        const participants = await Participant.find();
        res.json(participants)
    } catch (error) {
        console.error(error.message);
    }
}

//Get By Id
const getPartcipantById = async (req, res) => {
    try {
        const idtofind = req.params.id
        const participants = await Participant.findById(idtofind);
        res.json(participants)
    } catch (error) {
        console.error(error.message);
    }
}


//Add new Course
const addNewParticipant = async (req, res) =>{
    try {
        const newparticipant = req.body
        const addparticipant = await Participant.create(newparticipant)
        res.json(addparticipant)
    } catch (error) {
        
    }
}

//Delete By Id
const deleteOneParticipant = async (req, res) => {
    try {
        const deleteparticipant = req.params.id
        const delparticiapnt = await Participant.findByIdAndRemove(deleteparticipant);
        res.json(delparticiapnt)
    } catch (error) {
        console.error(error.message);
    }
}

//update participant
const updateOneparticipant = async (req, res) => {
    try {
        const updateparticipants = req.params.id
        const upparticipant = await Participant.updateOne({_id:updateparticipants}, {...req.body, _id:updateparticipants});
        res.json(upparticipant)
    } catch (error) {
        console.error(error.message);
    }
}

const courseBystudent = async(req, res) =>{
    try {
        const participants = await Participant.find()
        const courses = await Course.find()
        const result = participants.map(p => {
            let rp = {}; 
            rp.fullname = p.FirstName + " " + p.LastName;
            rp.totalhours = 0;
            rp.courses = p.courses.map(c => {
                let rc = {};
                const cours = courses.find(element => element._id.equals(c));
                if (cours){
                    rc.label = cours.label;
                    rc.volume = cours.volume;
                    rp.totalhours += cours.volume;
                }
               
                return rc
            })
            return rp;
        })
        res.json(result)
    } catch (error) {
        
    }
}

module.exports = {
    getAllPartcipants,
    getPartcipantById,
    addNewParticipant,
    deleteOneParticipant,
    updateOneparticipant,
    courseBystudent
}