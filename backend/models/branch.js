import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const branchSchema = new Schema({
    
    number: {
        type: String,
    },
    location: {
        type: String,
    },
    manager_id: {
        type: String,
    }

});

export const branchModel = mongoose.model('branch', branchSchema);

