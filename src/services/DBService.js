const mongoose = require('mongoose')

const connecter = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/bootcamp");
      console.log("connected the database");
    } catch (e) {
      console.error(e.message);
    }
  };

module.exports = {
    connecter
}