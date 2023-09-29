"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.post("/api/callback-url", (req, res) => {
    console.log(req.body);
    res.json({ request: req.body });
});
const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
exports.default = app;
