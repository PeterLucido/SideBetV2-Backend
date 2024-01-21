"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profileController_1 = __importDefault(require("../controllers/profileController"));
const router = express_1.default.Router();
router.post('/profiles', profileController_1.default.createProfile);
router.get('/profiles/:id', profileController_1.default.getProfileById);
router.put('/profiles/:id', profileController_1.default.updateProfile);
router.delete('/profiles/:id', profileController_1.default.deleteProfile);
exports.default = router;
