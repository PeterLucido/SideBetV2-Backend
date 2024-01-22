import express from 'express';
import FriendController from '../controllers/friendController';
const router = express.Router();

router.post('/', FriendController.addFriend);
router.put('/', FriendController.getAllFriends);
router.get('/:id', FriendController.getFriendById);
router.delete('/:id', FriendController.removeFriend);
router.delete('/:id', FriendController.blockFriend);

export default router;
