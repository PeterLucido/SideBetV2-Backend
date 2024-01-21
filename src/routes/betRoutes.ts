import express from 'express';
import BetController from '../controllers/betController';

const router = express.Router();

// This route is for creating a new bet
router.post('/', BetController.createBet);

// This route should be for getting a bet by its ID
router.get('/:id', BetController.getBetById);

// This route should be for updating a bet by its ID
router.put('/:id', BetController.updateBet);

// This route should be for deleting a bet by its ID
router.delete('/:id', BetController.deleteBet);

// Add a new route for getting bets by a profile ID
router.get('/profile/:profileId', BetController.getBetsByProfileId);

export default router;
