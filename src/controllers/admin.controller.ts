import { NextFunction, Request, Response } from "express";
import BaseController from "../core/contracts/baseController";
import AdminService from "../services/admin.service";
import { CustomRequest } from "../core/contracts/http";
import { DesignRepository } from "../core/repositories/design.repository";
import { ScoreRepository } from "../core/repositories/score.repository";

class AdminController extends BaseController {
  constructor(private readonly adminService: AdminService) {
    super();
  }

  async createDesign(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      await this.adminService.create(req.user, req.body);
      this.sendResponse(res, 200);
    } catch (error) {
      next(error);
    }
  }

  async getDesigns(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.adminService.getAll();
      this.sendResponse(res, 200, data);
    } catch (error) {
      next(error);
    }
  }

  async getDesign(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.adminService.get(req.params.id);
      this.sendResponse(res, 200, data);
    } catch (error) {
      next(error);
    }
  }
}

export default new AdminController(
  new AdminService(new DesignRepository(), new ScoreRepository())
);
