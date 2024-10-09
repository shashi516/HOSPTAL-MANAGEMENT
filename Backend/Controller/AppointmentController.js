import {CatchAsyncError} from "../middlewares/CatchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import {Appointment} from "../models/AppointmentSchema.js";
import {User} from "../models/UserSchema.js";

export const postAppointment=CatchAsyncError(async(req,res,next)=>{
    const {
        firstName,
        lastName,
        email,
        phone,
        nic,
        gender,
        dob,
        doctor_firstName,
        doctor_lastName,
        appointment_date,
        department,
        hasVisited,
        address
    }=req.body; 
    if( !firstName||
        !lastName||
        !email||
        !phone||
        !nic||
        !gender||
        !dob||
        !doctor_firstName||
        !doctor_lastName||
        !appointment_date||
        !department||
        !address
       ){
        return next(new ErrorHandler("Please fill full form!",400)); 
       }
       const isConflict=await User.find({
        firstName:doctor_firstName,
        lastName:doctor_lastName,
        role:"Doctor",
        doctorDepartment:department, 
       });
       if(isConflict.length===0){
        return next(new ErrorHandler("Doctor Not Found!",404));
       }
       if(isConflict.length>1){
        return next(new ErrorHandler("Doctor Conflicts, please contact through Email or Phone!",409));
       }
    const doctorId=isConflict[0]._id;
    const patientId=req.user._id;
    const appointment=await Appointment.create({
        firstName,
        lastName,
        email,
        phone,
        nic,
        gender,
        dob,
        doctor:{
            firstName:doctor_firstName,
            lastName:doctor_lastName,
        },
        appointment_date,
        department,
        hasVisited,
        address,
        doctorId,
        patientId
    });
    res.status(200).json({
        success:true,
        message:"Appointment sent successfully!",
        appointment,
    });
});

export const GetAllAppointment=CatchAsyncError(async(req,res,next)=>{
    const appointments=await Appointment.find();
    res.status(200).json({
        success:true,
        appointments,
    });
});

export const UpdateAppointmentStatus=CatchAsyncError(async(req,res,next)=>{
    const {id}=req.params;
    let appointment=await Appointment.findById(id);

    if(!appointment){
        return next(new ErrorHandler("Appointment Not Found"))
    }
    appointment=await Appointment.findByIdAndUpdate(id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });
    res.status(200).json({
        success:true,
        message:"Appointment Status Updated",
        appointment,
    })
});

export const deleteAppointment=CatchAsyncError(async(req,res,next)=>{
    const {id}=req.params;
    let appointment=await Appointment.findById(id);
    if(!appointment){
        return next(new ErrorHandler("Appointment Not Found",400));
    }
    await appointment.deleteOne();
    res.status(200).json({
        success:true,
        message:"Appointment Deleted!"
    })

})

export const AppointmentCounts=CatchAsyncError(async(req,res,next)=>{
    const appointmentcounts=await User.countDocuments({role:"Patient"});
    res.status(200).json({
        success:true,
        appointmentcounts,
    });
});