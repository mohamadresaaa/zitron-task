import { NextFunction, Request, Response } from "express";
import BaseController from "../core/contracts/baseController";
import AuthService from "../services/auth.service";
import { UserRepository } from "../core/repositories/user.repository";

class AuthController extends BaseController {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async login(req: Request, res: Response, next: NextFunction) {
    res.send(await this.authService.login(req.body));
  }
}

export default new AuthController(new AuthService(new UserRepository()));
// new AuthService(, new VerificationRepository())
