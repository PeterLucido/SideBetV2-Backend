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
const Bet_1 = __importDefault(require("../models/Bet"));
const BetController = {
    createBet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBet = new Bet_1.default(req.body);
                yield newBet.save();
                res.status(201).json(newBet);
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
    getBetById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bet = yield Bet_1.default.findById(req.params.id);
                if (!bet) {
                    return res.status(404).send();
                }
                res.json(bet);
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
    updateBet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bet = yield Bet_1.default.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!bet) {
                    return res.status(404).send();
                }
                res.json(bet);
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
    deleteBet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bet = yield Bet_1.default.findByIdAndDelete(req.params.id);
                if (!bet) {
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
exports.default = BetController;
