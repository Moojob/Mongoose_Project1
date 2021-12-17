const mongoose = require("mongoose");
const Course = require("./model/course");
const Participant = require("./model/Participant");

const connecter = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bootcamp");
    console.log("connected the database");
  } catch (e) {
    console.error(e.message);
  }
};

const creer = async () => {
  try {
    const course = await Course.create(
      {
        label: "HTML",
        volume: 70,
      },
      {
        label: "Css",
        Description: "Cours css",
        volume: 50,
      },
      {
        label: "Javascript",
        Description: "Cours Javascript",
        volume: 150,
      },
      {
        label: "Mongodb",
        Description: "Cours Mongodb",
        volume: 90,
      }
    );
    console.log("Cours Creer : ");
    console.log(course);
  } catch (e) {
    console.error(e.message);
  }
};

const participants = async () => {
  try {
    const participant = await Participant.create(
      {
        FirstName: "Elimane",
        LastName: "Ba",
        email: "Elimaneba@gmail.com",
        adress: {
          city: "Dakar",
          street: "Hlm",
        },
        courses: [
          "61b76b1e93603a59a340182c",
          "61b76b1e93603a59a340182d",
          "61b76b1e93603a59a340182e",
        ],
      },
      {
        FirstName: "Moussa ",
        LastName: "Diop",
        email: "Moussajop@gmail.com",
        adress: {
          city: "Rufisque",
          street: "Arafat",
        },
        courses: ["61b76b1e93603a59a340182c", "61b76b1e93603a59a340182f"],
      }
    );
    console.log("Participants Creer : ");
    console.log(participant);
  } catch (e) {
    console.error(e.message);
  }
};

const courseBystudents = async(req, res) =>{
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
             
              console.log(rc); 
          })
          console.log(rp); ;
      })
      res.json(result)
  } catch (error) {
      
  }
}

connecter();
// creer();
courseBystudents();
// participants();
