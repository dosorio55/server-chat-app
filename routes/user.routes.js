import express from "express";
import { login, register } from "../controllers/user.controllers.js";

const userRoutes = express.Router()

userRoutes.post("/register", register);
userRoutes.post("/login", login);
/*router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut); */

export { userRoutes }