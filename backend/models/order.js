import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
   
    item :{
        type :String,
        required : true
    },

    quantity:{
        type :Number,
        required :true
    },

    order_date:{
        type :String,
        required :true
    },

    delivery_date:{
        type :String,
    },

    customer_id:{
        type :String,
        required :true
    },

    branch:{
        type :String,
        required :true
    },

    branch_status:{
        type :String,
        required :true
    },

    status:{
        type :String,
        required :true
    },

    vehicle:{
        type :String
    },

})

export const orderModel = mongoose.model('order',orderSchema);

