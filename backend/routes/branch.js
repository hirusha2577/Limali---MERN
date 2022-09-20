
import express, { Router } from 'express';

// Controllers
import { addBranch, getAllBranch, deleteBranch, editBranch, getBranchById} from '../controllers/branch.js';

const router = express.Router();

router.post('/add', addBranch);
router.get('/getAllBranch', getAllBranch);
router.post('/delete', deleteBranch);
router.post('/edit',editBranch);
router.post('/getBranchById',getBranchById);


export default router;



