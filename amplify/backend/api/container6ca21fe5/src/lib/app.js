"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    next();
});
app.get('/', (req, res) => {
    res.send('Hello World from inside a container');
});
app.get('/admin', (req, res) => {
    res.send('This is the admin in the admin space');
});
app.listen(4000, () => {
    console.log('listening on port 4000');
});
//# sourceMappingURL=app.js.map