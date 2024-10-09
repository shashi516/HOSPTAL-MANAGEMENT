import express from "express";
import { GetAllMessages, sendmessage } from "../Controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router=express.Router();

router.post("/send",sendmessage);
router.get("/getall",isAdminAuthenticated,GetAllMessages);

export default router;

