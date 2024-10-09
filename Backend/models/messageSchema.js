import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        minLength:[1,"first Name must be required!"]
    },
    lastName:{
        type:String,
        require:true,
        minLength:[1,"Last Name must be required!"]
    },
    email:{
        type:String,
        require:true,
        validate:[validator.isEmail,"please povide a vailid Email!"]
    },
    phone:{
        type:String,
        require:true,
        minLength:[10,"Phone number must be 10 digit!"],
        maxLength:[10,"Phone number must be 10 digit!"]
    },
    message:{
        type:String,
        require:true,
        minLength:[10,"Message must contain at least 10 Charecters!"]
    }
});
export const Message=mongoose.model("Message",messageSchema)