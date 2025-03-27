"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postRouter = express_1.default.Router();
postRouter.get("/", (req, res) => {
    res.send("post route");
});
postRouter.get("/new", (req, res) => {
    res.send("new post route");
});
exports.default = postRouter;
