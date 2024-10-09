import express from "express";
import { AppointmentCounts, deleteAppointment, GetAllAppointment, postAppointment, UpdateAppointmentStatus } from "../Controller/AppointmentController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";

const router=express.Router();

router.post("/post",isPatientAuthenticated,postAppointment);
router.get("/getall",isAdminAuthenticated,GetAllAppointment);
router.put("/update/:id",isAdminAuthenticated,UpdateAppointmentStatus);
router.delete("/delete/:id",isAdminAuthenticated,deleteAppointment);
router.get("/appointmentcount",isAdminAuthenticated,AppointmentCounts);


export default router;