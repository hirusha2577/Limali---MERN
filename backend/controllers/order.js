// Models
import { orderModel } from '../models/order.js';


export const addOrder = async (req, res) => {

    let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let sysDate = year + "-" + month + "-" + date;

    console.log(req.body);
    const order = new orderModel({
        item: req.body.item,
        quantity: req.body.quantity,
        order_date: sysDate,
        delivery_date: req.body.delivery_date,
        customer_id: req.body.customer_id,
        branch: req.body.branch,
        branch_status: req.body.branch_status,
        status: req.body.status,
        vehicle: req.body.vehicle
    });

    const details = await order.save();
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


export const getBranchConfirmPendingOrders = async (req, res) => {
    const order = await orderModel.find({ branch_status: "true", status:"pending" });
    res.send(order);
}

export const getBranchConfirmProcessingOrders = async (req, res) => {
    const order = await orderModel.find({ branch_status: "true", status:"processing" });
    res.send(order);
}

export const getBranchConfirmDeliveredOrders = async (req, res) => {
    const order = await orderModel.find({ branch_status: "true", status:"delivered" });
    res.send(order);
}


export const addVehicleToOrder = async (req, res) => {
    try {
        console.log(req);
        const order = await orderModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                status: req.body.status,
                vehicle: req.body.vehicle,
            },
            {
                new: true
            }
        );

        if (order) {
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


export const confirmDelivered = async (req, res) => {

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let sysDate = year + "-" + month + "-" + date;

    try {
        console.log(req);
        const order = await orderModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                status: req.body.status,
                delivery_date: sysDate
            },
            {
                new: true
            }
        );

        if (order) {
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


export const vehicleDeliveryReport = async (req, res) => {
    const order = await orderModel.find({delivery_date: {$gte: req.body.startDate ,$lt: req.body.endDate}, vehicle:req.body.vehicle});
    if (order) {
        res.send({
            status: true,
            details: order
        });
    } else {
        res.send({
            status: false,
        });
    }
}

