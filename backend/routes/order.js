
import express, { Router } from 'express';

// Controllers
import { getBranchConfirmPendingOrders, getBranchConfirmProcessingOrders, getBranchConfirmDeliveredOrders, addOrder, addVehicleToOrder, confirmDelivered, vehicleDeliveryReport } from '../controllers/order.js';

const router = express.Router();

router.post('/add', addOrder);
router.get('/getBranchConfirmPendingOrders', getBranchConfirmPendingOrders);
router.get('/getBranchConfirmProcessingOrders', getBranchConfirmProcessingOrders);
router.get('/getBranchConfirmDeliveredOrders', getBranchConfirmDeliveredOrders);
router.post('/addVehicleToOrder',addVehicleToOrder);
router.post('/confirmDelivered',confirmDelivered);
router.post('/vehicleDeliveryReport',vehicleDeliveryReport);


export default router;