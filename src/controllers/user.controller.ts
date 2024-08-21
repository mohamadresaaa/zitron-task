import { NextFunction, Request, Response } from "express";
import BaseController from "../core/contracts/baseController";
import UserService from "../services/user.service";
import { CustomRequest } from "../core/contracts/http";
import { ScoreRepository } from "../core/repositories/score.repository";
import { DesignRepository } from "../core/repositories/design.repository";

class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }

  async submitScore(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      await this.userService.submitScore(req);
      return this.sendResponse(res, 200);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController(new UserService(new ScoreRepository(),new DesignRepository()));
