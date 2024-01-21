import Bet from '../models/Bet';
import Profile from '../models/Profile';
import { Request, Response } from 'express';

const BetController = {
  async getAllBets(req: Request, res: Response) {
    try {
      const bets = await Bet.find({});
      res.json(bets);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async getBetsByProfileId(req: Request, res: Response) {
    try {
      const profileId = req.params.profileId;
      const bets = await Bet.find({ 
        $or: [{ profile1: profileId }, { profile2: profileId }]
      });
      res.json(bets);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async createBet(req: Request, res: Response) {
    try {
      const newBet = new Bet(req.body);
      const bet = await newBet.save();
      // Note: These updates are not atomic and could result in only one profile being updated if an error occurs
      await Profile.findByIdAndUpdate(bet.profile1, { $push: { bet: bet._id } });
      await Profile.findByIdAndUpdate(bet.profile2, { $push: { bet: bet._id } });
      res.status(201).json(bet);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },
  

  async getBetById(req: Request, res: Response) {
    try {
      const bet = await Bet.findById(req.params.id);
      if (!bet) {
        return res.status(404).send();
      }
      res.json(bet);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async updateBet(req: Request, res: Response) {
    try {
      const bet = await Bet.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!bet) {
        return res.status(404).send();
      }
      res.json(bet);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async deleteBet(req: Request, res: Response) {
    try {
      const bet = await Bet.findByIdAndDelete(req.params.id);
      if (!bet) {
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
  }
};

export default BetController;
