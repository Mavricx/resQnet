//function to connect to the mongodb db.
const dotenv=require( "dotenv");
dotenv.config({ path: "./.env" })
const mongoose =require('mongoose');
const connectDB = async () => {
    // eslint-disable-next-line no-undef
    const dbUrl = process.env.MONGO_STRING
    try {
        await mongoose.connect(dbUrl);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectDB;