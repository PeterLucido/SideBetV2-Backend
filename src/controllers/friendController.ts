import Friend from '../models/Friend';
import { Request, Response } from 'express';

const FriendController = {
  async addFriend(req: Request, res: Response) {
    try {
      const newFriendship = new Friend(req.body);
      await newFriendship.save();
      res.status(201).json(newFriendship);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async getFriendById(req: Request, res: Response) {
    try {
      const friendship = await Friend.findById(req.params.id);
      if (!friendship) {
        return res.status(404).send();
      }
      res.json(friendship);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async getAllFriends(req: Request, res: Response) {
    try {
      const friendships = await Friend.find({});
      res.json(friendships);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async removeFriend(req: Request, res: Response) {
    try {
      const friendship = await Friend.findByIdAndDelete(req.params.id);
      if (!friendship) {
        return res.status(404).send();
      }
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async blockFriend(req: Request, res: Response) {
    try {
      const friendship = await Friend.findByIdAndUpdate(req.params.id, { blocked: true }, {
        new: true,
        runValidators: true
      });
      if (!friendship) {
        return res.status(404).send();
      }
      res.json(friendship);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  }
};

export default FriendController;
