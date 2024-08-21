import { model, Schema } from "mongoose";
import { ScoreDocument } from "../core/contracts/model";

const scoreSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  design: {
    ref: "Design",
    required: true,
    type: Schema.Types.ObjectId,
  },
  user: {
    ref: "User",
    required: true,
    type: Schema.Types.ObjectId,
  },
});

const Score = model<ScoreDocument>("Score", scoreSchema);

export default Score;
