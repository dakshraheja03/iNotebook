const mongoose = require('mongoose');
const mongoURI="mongodb://127.0.0.1/iNoteBook"

const connectToMongo=async()=>{
    await mongoose.connect(mongoURI);
    console.log("Connected Successfully")
  }

module.exports=connectToMongo;