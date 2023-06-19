"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = __importDefault(require("config"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./db"));
const app = express();
const port = config_1.default.get(`port`);
// parse application.json
app.use(body_parser_1.default.json());
app.listen(4000, () => {
    console.log(`Application listening at http://localhost:${port}`);
    (0, db_1.default)();
    (0, routes_1.default)(app);
});
