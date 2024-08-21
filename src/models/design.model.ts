import { model, Schema } from "mongoose";
import { DesignDocument } from "../core/contracts/model";

const designSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  deadLine: {
    type: Date,
    required: true,
  },
  user: {
    ref: "User",
    required: true,
    type: Schema.Types.ObjectId,
  },
});

const Design = model<DesignDocument>("Design", designSchema);

export default Design;
