import express from "express";
import { patientRegister,Login, AddNewAdmin, GetAllDoctors, GetUsersDetails,LogOutAdmin, LogOutPatient, AddNewDoctor, GetAllAdmin, DoctorCounts, AdminCounts, deleteDoctor } from "../Controller/UserController.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../middlewares/auth.js";
 
const router=express.Router();

router.post("/patient/register",patientRegister);
router.post("/login",Login);
router.post("/admin/addnew",isAdminAuthenticated,AddNewAdmin);
router.get("/doctors",isAdminAuthenticated,GetAllDoctors);
router.get("/patient/me",isPatientAuthenticated,GetUsersDetails);
router.get("/admin/me",isAdminAuthenticated,GetUsersDetails);
router.get("/admin/logout",isAdminAuthenticated,LogOutAdmin);
router.get("/patient/logout",isPatientAuthenticated,LogOutPatient);
router.post("/doctor/addnew",isAdminAuthenticated,AddNewDoctor);
router.get("/admin/getadmin",isAdminAuthenticated,GetAllAdmin);
router.get("/doctorcounts",isAdminAuthenticated,DoctorCounts);
router.get("/admincounts",isAdminAuthenticated,AdminCounts);
router.delete("/delete/:id",isAdminAuthenticated,deleteDoctor);

export default router;
 
