const mongoose = require('mongoose');

const dbConnect = async()=>{
try{
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
console.log("Connect to MongoDB")
}
catch(err){
    console.log("Couldn't connect to MongoDB");
}
}

module.exports = dbConnect;