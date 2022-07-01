const mongoose = require('mongoose');



// create a mongoDB Cunection
const mongoDBConection = async () => {

   try{

   await mongoose.connect(process.env.MONGO_STRING)

   console.log(`MognoDB Server is Ready`.bgBlue.black);

   }catch(error){
      console.log(`${error}`.bgRed.black);
   }

}



/// export cunrction
module.exports = mongoDBConection;