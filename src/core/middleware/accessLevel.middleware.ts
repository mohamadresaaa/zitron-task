import { NextFunction, Response } from "express";
import { CustomRequest } from "../contracts/http";
import { Role } from "../contracts/model";

export default (role: Role) => {
  return ({ user }: CustomRequest, res: Response, next: NextFunction) => {
    try {
      if (user.role === role) {
        return next();
      }

      // Otherwise return error
      throw new Error("access denied");
    } catch (error) {
      next(error);
    }
  };
};
