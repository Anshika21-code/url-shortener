import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Optional: show the Mongo URI only in development (not in production)
    if (process.env.NODE_ENV !== "production") {
      console.log("🔗 Connecting to MongoDB URI:", process.env.MONGO_URI);
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
