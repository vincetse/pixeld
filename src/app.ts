import dotenv from "dotenv";
import express from "express";
import path from "path";

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
  res.set({ "Content-Type": "image/gif" });
  // Ensure the path is relative to the compiled file or use path.resolve
  res.sendFile(path.join(__dirname, "../images/1x1.gif"));
});

export default app;
