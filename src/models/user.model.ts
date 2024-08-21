import { model, Schema } from "mongoose";
import { signToken } from "../core/utilities/jwt";
import { UserDocument } from "../core/contracts/model";

const userSchema = new Schema({
  username: {
    lowercase: true,
    required: true,
    trim: true,
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
   type: String,
   default: null
  }
});


/** Create jwt token
 * @return {string} token
 */
userSchema.methods.generateJwt = async function () {
  return signToken({
   id: this.id,
 });
};

const User = model<UserDocument>("User", userSchema);

export default User;
