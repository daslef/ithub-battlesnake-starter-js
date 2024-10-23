import express from "express";

import loadConfig from "./config.js";

import getMove from "../handlers/move.js";
import getInfo from "../handlers/info.js";

export default function setupServer() {
    const app = express();

    app.use(express.json());

    app.get("/", (_, res) => {
        res.send(getInfo());
    });

    app.post("/start", (_, res) => {
        res.send("ok");
    });

    app.post("/move", (req, res) => {
        res.send(getMove(req.body));
    });

    app.post("/end", (_, res) => {
        res.send("ok");
    });

    app.use(function (_, res, next) {
        res.set("Server", "battlesnake/github/starter-snake-javascript");
        next();
    });

    return () => app.listen(loadConfig())
}
