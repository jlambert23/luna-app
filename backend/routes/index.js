import express from 'express';
import petRouter from './pet';

const router = express.Router();

router.use('/api/pet', petRouter);

export default router;
