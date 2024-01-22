import express from 'express';
import VoteController from '../controllers/voteController';

const router = express.Router();

router.post('/', VoteController.sendVote);
router.get('/', VoteController.getAllVotes);
router.get('/:id', VoteController.getVoteById);
router.put('/:id', VoteController.updateVote);
router.delete('/:id', VoteController.deleteVote);

export default router;
