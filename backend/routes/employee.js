
import express, { Router } from 'express';

// Controllers
import { getDrivers} from '../controllers/employee.js';

const router = express.Router();

router.get('/getDrivers', getDrivers);


export default router;