import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    console.error("Error connecting to Mongoose:", error);
    throw new Error("Error connecting to Mongoose");
  }
};

export default dbConnect;
