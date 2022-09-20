import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    
    number: {
        type: String,
    },
    type: {
        type: String,
    },
    branch: {
        type: String,
    },
    driver: {
        type: String,
    },
    load: {
        type: String,
    },
    state: {
        type: String,
    }

});

export const VehicleModel = mongoose.model('vehicles', VehicleSchema);