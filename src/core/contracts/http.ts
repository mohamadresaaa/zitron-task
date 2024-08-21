import { Request } from "express";
import { UserDocument } from "./model";

export interface CustomRequest extends Request {
  user?: UserDocument;
}
