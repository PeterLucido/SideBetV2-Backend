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
const Comment_1 = __importDefault(require("../models/Comment"));
const CommentController = {
    createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newComment = new Comment_1.default(req.body);
                yield newComment.save();
                res.status(201).json(newComment);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'An unknown error occurred.' });
                }
            }
        });
    },
    getCommentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comment = yield Comment_1.default.findById(req.params.id);
                if (!comment) {
                    return res.status(404).send();
                }
                res.json(comment);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'An unknown error occurred.' });
                }
            }
        });
    },
    getAllComments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comments = yield Comment_1.default.find({});
                res.json(comments);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'An unknown error occurred.' });
                }
            }
        });
    },
    updateComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comment = yield Comment_1.default.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!comment) {
                    return res.status(404).send();
                }
                res.json(comment);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'An unknown error occurred.' });
                }
            }
        });
    },
    deleteComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comment = yield Comment_1.default.findByIdAndDelete(req.params.id);
                if (!comment) {
                    return res.status(404).send();
                }
                res.status(204).send();
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'An unknown error occurred.' });
                }
            }
        });
    }
};
exports.default = CommentController;
