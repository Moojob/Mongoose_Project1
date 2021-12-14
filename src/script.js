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
        courses: [
          "61b76b1e93603a59a340182c",
          "61b76b1e93603a59a340182d",
          "61b76b1e93603a59a340182e",
          "61b76b1e93603a59a340182f",
        ],
      },
      {
        Name: "Moussa Diop",
        email: "Moussajop@gmail.com",
        adress: {
          city: "Rufisque",
          street: "Arafat",
        },
        courses: [
          "61b76b1e93603a59a340182c",
          "61b76b1e93603a59a340182d",
          "61b76b1e93603a59a340182e",
          "61b76b1e93603a59a340182f",
        ],
      }
    );
    console.log("Participants Creer : ");
    console.log(participant);
  } catch (e) {
    console.error(e.message);
  }
};

const Eli = async () => {
  try {
  const Elimane = await Participant.find({ id: "61b76bec30f4630218fd3f7e" } )
      .where("courses")
      .select(" Name -_id courses")
    console.log(Elimane);
  } catch (e) {
    console.error(e.message);
  }
};

connecter();
// creer();
Eli();
// mou();
// participants();
