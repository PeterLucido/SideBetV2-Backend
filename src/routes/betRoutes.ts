import express from 'express';
import BetController from '../controllers/betController';

const router = express.Router();

router.post('/', BetController.createBet);
router.get('/:id', BetController.getBetById);
router.put('/:id', BetController.updateBet);
router.delete('/:id', BetController.deleteBet);
router.get('/profile/:profileId', BetController.getBetsByProfileId);

export default router;
