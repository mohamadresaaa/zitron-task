import * as express from "express";
import { Router } from "express";
import adminController from "../controllers/admin.controller";

const router: Router = express.Router();

// routes
router.get("/designs", adminController.getDesigns);
router.get("/designs/:id", adminController.getDesign);
router.post("/designs", adminController.createDesign);

export default router;
