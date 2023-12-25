import mongoose, { Schema } from "mongoose";

const sessionSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  sessionToken: {
    type: String,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expires: Date,
});

const SessionModel =
  mongoose.models.SessionModel || mongoose.model("Session", sessionSchema);

export default SessionModel;
