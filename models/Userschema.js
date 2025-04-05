import mongoose from "mongoose";
const userschema=new mongoose.Schema({email:{type:"string",required:true}
, password:{type:"string",required:"true"},username:{type:"string",required:"true",unique:true},profilephoto:{type:"string"}})
const usermodel=mongoose.model("usermodel",userschema)
export default usermodel;