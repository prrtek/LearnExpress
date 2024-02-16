import { Router } from "express";
import {
  getUsers,
  getUserwithID,
  postUsers,
} from "../controllers/user.controller.js";
const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserwithID);
router.post("/users", postUsers);

//export it
export default router;

//fix errors
