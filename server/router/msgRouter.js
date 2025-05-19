import express from 'express';
import { msgController } from '../controller/messageController.js';

const router = express.Router();
router.post('/',msgController);
export default router;