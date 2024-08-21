import { NextFunction, Response } from "express";
import { verifyToken } from "../utilities/jwt";
import { CustomRequest } from "../contracts/http";
import userRepository from "../repositories/user.repository";

export default async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get jwt token from headers.authorization or cookies.token
    const token =
      (req.headers?.authorization as string) || (req.cookies?.token as string);

    // If exists token, handle it
    if (token) {
      // Verify token
      const { id } = verifyToken(token);
      // Find user with id
      const user = await userRepository.findUser(id);

      // if does'nt exists, handle it
      if (!user) {
        throw new Error("unAuthorized");
      }

      // Set user to req.user and return next
      req.user = user;
      return next();
    }
    throw new Error("unauthorized");
  } catch (error) {
    next(error);
  }
};
