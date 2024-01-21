import Profile from '../models/Profile';
import { Request, Response } from 'express';

const ProfileController = {
  async createProfile(req: Request, res: Response) {
    try {
      const { user, name, photo, bet, comments, votes, friends } = req.body;
      const newProfileData = { user, name, photo, bet, comments, votes, friends };
      const newProfile = new Profile(newProfileData);
  
      await newProfile.save();
      res.status(201).json(newProfile);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },
  

  async getProfileById(req: Request, res: Response) {
    try {
      const profile = await Profile.findById(req.params.id);
      if (!profile) {
        return res.status(404).send();
      }
      res.json(profile);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async updateProfile(req: Request, res: Response) {
    try {
      const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!profile) {
        return res.status(404).send();
      }
      res.json(profile);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async deleteProfile(req: Request, res: Response) {
    try {
      const profile = await Profile.findByIdAndDelete(req.params.id);
      if (!profile) {
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

export default ProfileController;
