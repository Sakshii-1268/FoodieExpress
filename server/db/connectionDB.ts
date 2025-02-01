// mongopassword=ViGAUD5bWDtFUjoN
// username=binaryycoder0106

import mongoose  from "mongoose"

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.Mongo_URI!);
        console.log("mongo connected");
        
    }
    catch(error){
console.log(error);

    }
}

export default connectDB;