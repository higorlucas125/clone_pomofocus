import { Schema,model,models } from "mongoose";

const UserSchema = newSchema({
    email:{
        type: String,
        unique:[true,'Email already exists!'],
        required:[true,'Email is required!']
    }
})