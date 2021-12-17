const mongoose = require('mongoose');
const course = require('../model/course')

//Get all Courses
const getAllCourses = async (req, res) => {
    try {
        const Courses = await course.find();
        res.json(Courses)
    } catch (error) {
        console.error(error.message);
    }
}

//Get By Id
const getCourseById = async (req, res, next) => {
    try {
        const idtofind = req.params.id
        const Courses = await course.findById(idtofind);
        res.json(Courses)
        next();
    } catch (error) {
        console.error(error.message);
    }
}

//Add new Course
const addNewCourse = async (req, res) =>{
    try {
        const newcourse = req.body
        const addcourse = await course.create(newcourse)
        res.json(addcourse)
    } catch (error) {
        
    }
}

//Delete By Id
const deleteOneCourses = async (req, res) => {
    try {
        const deletecourse = req.params.id
        const delcourse = await course.findByIdAndRemove(deletecourse);
        res.json(delcourse)
    } catch (error) {
        console.error(error.message);
    }
}

//update courses
const updateOneCourses = async (req, res) => {
    try {
        const updatecourses = req.params.id
        const updatecourse = await course.updateOne({_id:updatecourses}, {...req.body, _id:updatecourses});
        res.json(updatecourse)
    } catch (error) {
        console.error(error.message);
    }
}


module.exports = {
    getAllCourses,
    getCourseById,
    addNewCourse,
    deleteOneCourses,
    updateOneCourses
}