import * as express from "express";
import { Router } from "express";
import adminRoutes from "./admin";
import userRoutes from "./user";
import authController from "../controllers/auth.controller";
import accessLevelMiddleware from "../core/middleware/accessLevel.middleware";
import authorizationMiddleware from "../core/middleware/authorization.middleware";

const router: Router = express.Router();

// routes
router.post("/login", authController.login);
router.use("/user", authorizationMiddleware, userRoutes);
router.use(
  "/admin",
  authorizationMiddleware,
  accessLevelMiddleware("ADMIN"),
  adminRoutes
);

export default router;
