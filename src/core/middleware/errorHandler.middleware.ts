import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandler: ErrorRequestHandler = (
  error: any,
  _req,
  res: Response,
  _next
) => {
  console.log("error", error);
  res.status(error.status ? error.status : 500).send("error");
};

export const error404 = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (process.env.NODE_ENV !== "production") throw new Error("not found");

    return res.redirect(301, `https://${process.env.DOMAIN}/404`);
  } catch (error) {
    next(error);
  }
};
