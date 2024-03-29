"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = __importDefault(require("../models/Message"));
const MessageController = {
    sendMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMessage = new Message_1.default(req.body);
                yield newMessage.save();
                res.status(201).json(newMessage);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "An unknown error occurred." });
                }
            }
        });
    },
    getMessageById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = yield Message_1.default.findById(req.params.id);
                if (!message) {
                    return res.status(404).send();
                }
                res.json(message);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "An unknown error occurred." });
                }
            }
        });
    },
    getAllMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messages = yield Message_1.default.find({});
                res.json(messages);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "An unknown error occurred." });
                }
            }
        });
    },
    deleteMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = yield Message_1.default.findByIdAndDelete(req.params.id);
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
        });
    }
};
exports.default = MessageController;
