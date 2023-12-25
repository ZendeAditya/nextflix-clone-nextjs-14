import mongoose, { Schema } from "mongoose";

const accountSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  type: String,
  provider: String,
  providerAccountId: String,
  refresh_token: String,
  access_token: String,
  expire_at: Number,
  scope: String,
  id_token: String,
  session_state: String,
});

const AccountModel =
  mongoose.models.AccountModel || mongoose.model("Account", accountSchema);

export default AccountModel;
