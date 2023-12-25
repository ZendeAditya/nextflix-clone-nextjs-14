import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: String,
  image: String,
  email: {
    type: String,
    unique: true,
  },
  emailVerified: Date,
  hashedPassword: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  favoriteIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
  sessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
    },
  ],
  accounts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
  ],
});

const UserModel =
  mongoose.models.UserModel || mongoose.model("User", userSchema);
export default UserModel;
