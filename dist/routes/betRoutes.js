"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const betController_1 = __importDefault(require("../controllers/betController"));
const router = express_1.default.Router();
router.post('/bets', betController_1.default.createBet);
router.get('/bets/:id', betController_1.default.getBetById);
router.put('/bets/:id', betController_1.default.updateBet);
router.delete('/bets/:id', betController_1.default.deleteBet);
exports.default = router;
