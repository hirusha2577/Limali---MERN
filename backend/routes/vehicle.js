import express, { Router } from 'express';

// Controllers
import { addVehicle, getAllVehicles, deleteVehicles, editVehicle, getSelectedVehicle, getAlldelivering, getAllavalable, getAllinRepair, getAlldeliveringCount, getAllVehiclesCount, getAllavalableCount, getAllinRepairCount} from '../controllers/vehicle.js';

const router = express.Router();

router.post('/add', addVehicle);
router.get('/getAllVehicles', getAllVehicles);
router.post('/delete', deleteVehicles);
router.post('/edit',editVehicle);
router.post('/getSelectedVehicle',getSelectedVehicle);
router.get('/getAlldelivering',getAlldelivering);
router.get('/getAllavalable',getAllavalable);
router.get('/getAllinRepair',getAllinRepair);
router.get('/getAlldeliveringCount',getAlldeliveringCount);
router.get('/getAllVehiclesCount', getAllVehiclesCount);
router.get('/getAllavalableCount',getAllavalableCount);
router.get('/getAllinRepairCount',getAllinRepairCount);

export default router;