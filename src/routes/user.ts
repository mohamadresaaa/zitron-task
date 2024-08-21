import * as express from "express";
import { Router } from "express";
import userController from "../controllers/user.controller";

const router: Router = express.Router();

// routes
router.post("/score/:id", userController.submitScore);

export default router;
