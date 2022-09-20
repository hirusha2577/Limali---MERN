
// Models
import { VehicleModel } from '../models/vehicle.js';

export const addVehicle = async (req, res) => {

    console.log(req.body);
    const vehicle = new VehicleModel({
        number: req.body.number,
        type: req.body.type,
        branch: req.body.branch,
        driver: req.body.driver,
        load: req.body.load,
        state: req.body.state
    });

    const details = await vehicle.save();
    if (details) {
        res.send({
            status: true,
            details: details
        });
    } else {
        res.send({
            status: false,
        });
    }
}

export const getAllVehicles = async (req, res) => {
    const vehicles = await VehicleModel.find({});
    res.send(vehicles);
}

export const getAllVehiclesCount = async (req, res) => {
    const vehicles = await VehicleModel.find().count();
    res.send(String(vehicles));
}

export const getAlldelivering = async (req, res) => {
    const vehicles = await VehicleModel.find({state:"Delivering"});
    res.send(vehicles);
}

export const getAlldeliveringCount = async (req, res) => {
    const vehicles = await VehicleModel.find({state:"Delivering"}).count();
    res.send(String(vehicles));
}

export const getAllavalable = async (req, res) => {
    const vehicles = await VehicleModel.find({state:"Avalable"});
    res.send(vehicles);
}

export const getAllavalableCount = async (req, res) => {
    const vehicles = await VehicleModel.find({state:"Avalable"}).count();
    res.send(String(vehicles));
}

export const getAllinRepair = async (req, res) => {
    const vehicles = await VehicleModel.find({state:"In Repair"});
    res.send(vehicles);
}

export const getAllinRepairCount = async (req, res) => {
    const vehicles = await VehicleModel.find({state:"In Repair"}).count();
    res.send(String(vehicles));
}

export const deleteVehicles = async (req, res) => {
    const vehicle = await VehicleModel.findOneAndDelete({ _id: req.body.id });
    res.send(vehicle);
}

export const editVehicle = async (req, res) => {

    try {

        console.log(req);

        const vehicle = await VehicleModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                number: req.body.number,
                type: req.body.type,
                branch: req.body.branch,
                driver: req.body.driver,
                load: req.body.load,
                state: req.body.state
            },
            {
                new:true
            }
            );

        if (vehicle) {
            res.send({
                status: true,
                details: vehicle  
            });
        } else {
            res.send({
                status: false,
            });
        }

    } catch (error) {
        console.log(error.messaga)
    }



}

export const getSelectedVehicle = async (req, res) => {
    const vehicles = await VehicleModel.findOne({ _id: req.body.id });
    res.send(vehicles);
}