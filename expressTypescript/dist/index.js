"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("./routes/post"));
const login_1 = __importDefault(require("./routes/login"));
const todo_1 = __importDefault(require("./routes/todo"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/", express_1.default.static("public"));
app.use("/post", post_1.default);
app.use("/todos", todo_1.default);
app.use("/login", login_1.default);
app.get("/add", (req, res) => {
    const query = req.query;
    const { num1, num2 } = query;
    console.log(query);
    const result = parseInt(num1) + parseInt(num2);
    res.send({ result });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
