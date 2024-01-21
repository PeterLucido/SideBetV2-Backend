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
const Profile_1 = __importDefault(require("../models/Profile"));
const ProfileController = {
    createProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProfile = new Profile_1.default(req.body);
                yield newProfile.save();
                res.status(201).json(newProfile);
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
    getProfileById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield Profile_1.default.findById(req.params.id);
                if (!profile) {
                    return res.status(404).send();
                }
                res.json(profile);
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
    updateProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield Profile_1.default.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!profile) {
                    return res.status(404).send();
                }
                res.json(profile);
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
    deleteProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield Profile_1.default.findByIdAndDelete(req.params.id);
                if (!profile) {
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
exports.default = ProfileController;
