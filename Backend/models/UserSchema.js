import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema =new mongoose.Schema({
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
    nic:{
        type:String,
        required:true,
        minLenght:[12,"nic must contain 12 digits"],
        maxLenght:[12,"nic must contain 12 digits"]
    },
    dob:{
        type:Date,
        required:[true, "Date of Birth is Required!"]

    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"]
    },
    password:{
        type:String,
        require:true,
        minLenght:[8,"Password must have minimum 8 charecters!"],
        Select:false
    },
    role:{
        type:String,
        required:true,
        enum:["Admin","Patient","Doctor"]
    },
    doctorDepartment:{
        type:String,
    },
    docAvatar:{
        public_id:String,
        url:String, 
    }
   
});

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
});

UserSchema.methods.comparePassword= async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
}

UserSchema.methods.generateJsonWebToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES
    })
}

 
export const User=mongoose.model("User",UserSchema);