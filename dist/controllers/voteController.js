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
const Vote_1 = __importDefault(require("../models/Vote"));
const VoteController = {
    sendVote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newVote = new Vote_1.default(req.body);
                yield newVote.save();
                res.status(201).json(newVote);
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
    getVoteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vote = yield Vote_1.default.findById(req.params.id);
                if (!vote) {
                    return res.status(404).send();
                }
                res.json(vote);
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
    getAllVotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const votes = yield Vote_1.default.find({});
                res.json(votes);
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
    updateVote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vote = yield Vote_1.default.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!vote) {
                    return res.status(404).send();
                }
                res.json(vote);
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
    deleteVote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vote = yield Vote_1.default.findByIdAndDelete(req.params.id);
                if (!vote) {
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
exports.default = VoteController;
