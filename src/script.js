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

//  const part = async () => {
//       try {
//           let req = await Participant.find({})
//           let arrCourseId = [];
//           // console.log(req);
//           for (let j = 0; j < req.length; j++) {
//               arrCourseId.push(req[j]._id);
//           }
//           console.log(arrCourseId);
//           for (let k = 0; k < arrCourseId.length; k++) {
//               let vol = 0;
//               let label = [];
//               let array = (await Participant(arrCourseId[k])).courses;
//               for (let i = 0; i < array.length; i++) {
//                   const element = array[i];
//                   label.push((await CourseModel(element)).label)
//                   vol.push(await Course(element)).volume;
//               }
//               console.log('________________________Student list_____________________________');
//               console.log("       Student : " + req[k].FirstName + " " + req[k].LastName);
//               console.log("       label : " + label);
//               console.log("       Volume : " + vol);
//           }
//       } catch (error) {
//           console.log(error.message)
//       }
//   }
connecter();
// creer();
// part();
participants();
