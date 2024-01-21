import Message from "../models/Message";
import { Request, Response } from "express";

const MessageController = {
  async sendMessage(req: Request, res: Response) {
    try {
      const newMessage = new Message(req.body);
      await newMessage.save();
      res.status(201).json(newMessage);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred." });
      }
    }
  },

  async getMessageById(req: Request, res: Response) {
    try {
      const message = await Message.findById(req.params.id);
      if (!message) {
        return res.status(404).send();
      }
      res.json(message);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred." });
      }
    }
  },

  async getAllMessages(req: Request, res: Response) {
    try {
      const messages = await Message.find({});
      res.json(messages);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred." });
      }
    }
  },

  async deleteMessage(req: Request, res: Response) {
    try {
      const message = await Message.findByIdAndDelete(req.params.id);
      if (!message) {
        return res.status(404).send();
      }
      res.status(204).send();
    }
    catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
      else {
        res.status(500).json({ error: "An unknown error occurred." });
      }
    }
  }
}

export default MessageController;