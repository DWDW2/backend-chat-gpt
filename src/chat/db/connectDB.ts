import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_DB_URI || '');
}

export default connectDB;