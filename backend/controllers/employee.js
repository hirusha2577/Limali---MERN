
// Models
import { employeeModel } from '../models/employee.js';


export const getDrivers = async (req, res) => {
    const drivers = await employeeModel.find({empType:"Driver"});
    res.send(drivers);
}

