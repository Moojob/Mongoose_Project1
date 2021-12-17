const express = require('express');
const dbconnecte= require('./services/DBService')
const participantsService = require('./services/participantsService')
const courseServices = require('./services/courseServices')

app = express();
app.use(express.static('public'))


app.use(express.json())
app.use(express.urlencoded({extended : false}))

dbconnecte.connecter();

//participant
app.get('/participants', participantsService.getAllPartcipants)
app.get('/participants/courses', participantsService.courseBystudent)

app.get('/participants/:id', participantsService.getPartcipantById)

app.post('/participants', participantsService.addNewParticipant)

app.delete('/participants/:id', participantsService.deleteOneParticipant)

app.patch('/participants/:id', participantsService.updateOneparticipant)


//courses
app.get('/courses', courseServices.getAllCourses)
app.get('/courses/:id', courseServices.getCourseById)

app.post('/courses', courseServices.addNewCourse)

app.delete('/courses/:id', courseServices.deleteOneCourses)

app.patch('/courses/:id', courseServices.updateOneCourses)


//course/participant



app.listen(3000, ()=> console.log('server listening on port 3000'));