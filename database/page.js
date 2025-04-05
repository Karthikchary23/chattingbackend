//k7xFI2s2WgE5m649
//lingojikarthikchary
// 
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config(); // Load variables into `process.env`
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
