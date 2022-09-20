import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required :true
    },
    password :{
        type : String,
        required :true
    },
    address :{
        type : String,
        required : true
    },
    age:{
        type :Number,
        required : true
    },
    gender:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    empType:{
        type:String,
        required:true
    }
    
    
})

export const employeeModel = mongoose.model('Employee',employeeSchema);

