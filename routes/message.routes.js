import express from "express";
import { addMessage, getMessages } from "../controllers/messages.controllers.js";

const messagesRoutes = express.Router()

messagesRoutes.post("/add-msg", addMessage);
messagesRoutes.post("/get-msg", getMessages);

export { messagesRoutes }