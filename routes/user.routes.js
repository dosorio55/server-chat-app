import express from "express";
import { login } from "../controllers/user.controllers.js";

const userRoutes = express.Router()

userRoutes.post("/login", login);
/* router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut); */

export { userRoutes }