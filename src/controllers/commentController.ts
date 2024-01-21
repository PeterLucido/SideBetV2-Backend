import Comment from '../models/Comment';
import { Request, Response } from 'express';

const CommentController = {
  async createComment(req: Request, res: Response) {
    try {
      const newComment = new Comment(req.body);
      await newComment.save();
      res.status(201).json(newComment);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async getCommentById(req: Request, res: Response) {
    try {
      const comment = await Comment.findById(req.params.id);
      if (!comment) {
        return res.status(404).send();
      }
      res.json(comment);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async getAllComments(req: Request, res: Response) {
    try {
      const comments = await Comment.find({});
      res.json(comments);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async updateComment(req: Request, res: Response) {
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!comment) {
        return res.status(404).send();
      }
      res.json(comment);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  },

  async deleteComment(req: Request, res: Response) {
    try {
      const comment = await Comment.findByIdAndDelete(req.params.id);
      if (!comment) {
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

export default CommentController;
