import express from "express";
import { updateUser, loginUser } from "../controller/user.controller.js";

const router = express.Router();

router.put("/user/:id", updateUser);
router.post("/user", loginUser);

export default router;