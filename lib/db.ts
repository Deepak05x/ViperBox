import mongoose from "mongoose";

const mongodb = process.env.MONGO_DB_URI

console.log(mongodb)

if(!mongodb){
    throw new Error("Mongo DB Uri is not recogonized")
}

const connectToDb = async()=>{
    try{
        const connection = await mongoose.connect(mongodb)
        console.log("Database Connected")
        return connection
    }catch(error){
        console.log(error)
    }
}

export default connectToDb