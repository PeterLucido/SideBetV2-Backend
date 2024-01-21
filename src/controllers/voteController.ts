import Vote from '../models/Vote';
import { Request, Response } from 'express';

const VoteController = {
  async sendVote(req: Request, res: Response) {
    try {
      const newVote = new Vote(req.body);
      await newVote.save();
      res.status(201).json(newVote);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async getVoteById(req: Request, res: Response) {
    try {
      const vote = await Vote.findById(req.params.id);
      if (!vote) {
        return res.status(404).send();
      }
      res.json(vote);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async getAllVotes(req: Request, res: Response) {
    try {
      const votes = await Vote.find({});
      res.json(votes);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async updateVote(req: Request, res: Response) {
    try {
      const vote = await Vote.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!vote) {
        return res.status(404).send();
      }
      res.json(vote);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async deleteVote(req: Request, res: Response) {
    try {
      const vote = await Vote.findByIdAndDelete(req.params.id);
      if (!vote) {
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

export default VoteController;