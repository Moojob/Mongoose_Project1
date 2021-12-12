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
        Name: "Elimane Ba",
        email: "Elimaneba@gmail.com",
        adress: {
          city: "Dakar",
          street: "Hlm",
        },
        Courses: [{label: "HTML", volume: 70}],
      },
      {
        Name: "Moussa Diop",
        email: "Moussajop@gmail.com",
        adress: {
          city: "Rufisque",
          street: "Arafat",
        },
        Courses: [{label: "HTML", volume: 70}],
      },
      {
        Name: "Elhadj Sy",
        email: "Sambasy@gmail.com",
        adress: {
          street: "LG",
        },
        Courses: [{label: "HTML", volume: 70}],
      }
    );
    console.log("Participants Creer : ");
    console.log(participant);
  } catch (e) {
    console.error(e.message);
  }
};

const parts = async () => {
  try {
    const part = await Participant.findOne({Name: 'Sy'}, 'Name -_id Courses')
      console.log(part);
    // console.log("Name: ");
    
  } catch (e) {
    console.error(e.message);
  }
};

connecter();
creer();
// parts();
participants();

