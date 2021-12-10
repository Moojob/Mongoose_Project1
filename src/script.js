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
        firstname: "Elimane",
        lastname: "Ba",
        email: "Elimaneba@gmail.com",
        adress: {
          city: "Dakar",
          street: "Hlm",
        },
        Courses: ["61b0e508752b3a123d2801d6", "61b0e508752b3a123d2801d7"],
      },
      {
        firstname: "Moussa",
        lastname: "Diop",
        email: "Moussajop@gmail.com",
        adress: {
          city: "Rufisque",
          street: "Arafat",
        },
        Courses: ["61b20eedd26a0be6782b8147", "61b0e508752b3a123d2801d7"],
      },
      {
        firstname: "Elhadj",
        lastname: "Sy",
        email: "Moussajop@gmail.com",
        adress: {
          street: "LG",
        },
        Courses: ["61b20eedd26a0be6782b8148", "61b0e508752b3a123d2801d7"],
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
    const part = await Participant.find('61b20eedd26a0be6782b8148');
    console.log(part);
  } catch (e) {
    console.error(e.message);
  }
};

connecter();
creer();
participants();
parts();
