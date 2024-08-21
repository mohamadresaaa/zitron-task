import { Document, Model } from "mongoose";

export type Role = null | "ADMIN";

export declare interface Models {
  User: UserModel;
  Score: ScoreModel;
  Design: DesignModel;
}

export interface UserDocument extends Document {
  password: string;
  role: Role;
  username: string;
  generateJwt: () => Promise<string>;
}
export interface DesignDocument extends Document {
  title: string;
  deadLine: Date;
  user: UserDocument;
}
export interface ScoreDocument extends Document {
  number: Number;
  user: UserDocument;
  design: DesignDocument;
}

export type ScoreModel = Model<ScoreDocument>;
export type DesignModel = Model<DesignDocument>;
export type UserModel = Model<UserDocument>;
