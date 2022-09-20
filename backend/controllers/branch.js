// Models
import { branchModel } from '../models/branch.js';

export const addBranch = async (req, res) => {
    console.log(req.body);

    const branch = new branchModel({
        number: req.body.number,
        location: req.body.location,
        manager_id: 1
        // manager_id: req.body.manager_id

  

    })
    const details = await branch.save();
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
export const getAllBranch = async (req, res) => {
    const branch = await branchModel.find({});

    res.send(branch);
    

}

export const deleteBranch = async (req, res) => {
    const branch = await branchModel.findOneAndDelete({_id: req.body.id});
    res.send(branch)

}
export const editBranch = async (req, res) => {

    
        const branch = await branchModel.findOneAndUpdate(
            {
                _id: req.body._id
            },
            {
                _id: req.body._id,
                number: req.body.number,
                location: req.body.location,
                
            },
            {
                new:true
            }
            );

        if (branch) {
            res.send({
                status: true,
                details: branch  
            });
        } else {
            res.send({
                status: false,
            });
        }

    
}
export const getBranchById = async (req, res, next) => {

    const branch = await branchModel.findOne({ _id: req.body.id });
    res.send(branch);
    
}