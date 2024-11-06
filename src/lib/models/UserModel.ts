import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    middleInitial: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    contactNo: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    username: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: false,
    },

    role: {
      type: String,
      enum: ["user", "admin", "staff", "manager"],
      default: "user",
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
