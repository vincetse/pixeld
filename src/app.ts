import dotenv from "dotenv";
import express from "express";
import { GIF_1x1 } from "./assets.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("");
});

app.get("/js", (req, res) => {
  res.set({ "Content-Type": "text/javascript" });
  res.send("// nop");
});

app.get("/html", (req, res) => {
  res.set({ "Content-Type": "text/html" });
  res.send("<html></html>");
});

app.get("/image", (req, res) => {
  res.set({
    "Content-Type": "image/gif",
    "Content-Length": GIF_1x1.length
  });
  res.send(Buffer.from(GIF_1x1));
});

export default app;
