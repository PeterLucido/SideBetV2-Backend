"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/Bet.ts
const mongoose_1 = __importStar(require("mongoose"));
var BetStatus;
(function (BetStatus) {
    BetStatus["Open"] = "open";
    BetStatus["Closed"] = "closed";
    BetStatus["Settled"] = "settled";
})(BetStatus || (BetStatus = {}));
const betSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user1: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    user2: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: Object.values(BetStatus), default: BetStatus.Open },
    comments: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Comment' }],
    votes: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Vote' }],
    amount: { type: Number, required: true },
    winner: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', default: null },
    loser: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });
const Bet = mongoose_1.default.model('Bet', betSchema);
exports.default = Bet;
