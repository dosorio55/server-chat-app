import express from "express";
import { getAllUsers, login, register, setAvatar } from "../controllers/user.controllers.js";

const userRoutes = express.Router()

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.post("/setavatar/:id", setAvatar);
userRoutes.get("/all-users/:id", getAllUsers);
// router.get("/logout/:id", logOut);

export { userRoutes }