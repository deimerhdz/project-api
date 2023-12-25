import { Router } from "express";
import { getUserById, saveUser } from "../controllers/user.controller.js";

const router = Router();

router.get('/:id',getUserById);
router.post('/',saveUser);

export default router;