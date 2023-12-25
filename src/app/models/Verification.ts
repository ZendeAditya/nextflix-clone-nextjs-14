import mongoose, { Schema } from "mongoose";

const verificationTokenSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  identifier: String,
  token: {
    type: String,
    unique: true,
  },
  expire: Date,
});

const VerificationTokenModel =
  mongoose.models.VerificationTokenModel ||
  mongoose.model("VerificationToken", verificationTokenSchema);

export default VerificationTokenModel;
