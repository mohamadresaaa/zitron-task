import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import router from "./routes";
import { error404, errorHandler } from "./core/middleware/errorHandler.middleware";

export default class Core {
  /** @define app */
  private readonly app: express.Application;

  // Initialize express
  constructor() {
    this.app = express();

    /** Setup and using packages
     * @private
     * @package body-parser, cookie-parser
     */
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());

    // router
    this.app.use("/", router);

    // Errors management
    this.app.use('*', error404)
    this.app.use(errorHandler)
  }

  getApp(): express.Application {
    return this.app;
  }
}
