import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_DB_URI || '');
    console.log('connected to mongodb')
}

export default connectDB;