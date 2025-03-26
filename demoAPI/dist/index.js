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
const express_1 = __importDefault(require("express"));
const bcrypt_ts_1 = require("bcrypt-ts");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
const posts = [
    {
        id: 1,
        title: "title",
        createdAt: new Date(),
        isCompleted: false,
    },
];
const logins = [];
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(posts);
}));
app.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const salt = yield (0, bcrypt_ts_1.genSalt)(10);
    const hashValue = yield (0, bcrypt_ts_1.hash)(password, salt);
    console.log(req.body);
    const login = {
        username,
        password: hashValue,
        salt,
    };
    logins.push(login);
    res.send(204);
}));
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const loginUser = logins.find((login) => (login.username = username));
    console.log("loginUser", loginUser);
    console.log(loginUser);
    const result = yield (0, bcrypt_ts_1.compare)(password, loginUser.password);
    res.send(result);
}));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
