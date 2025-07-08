const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const data = req.body;
  console.log("🚨 TOKEN BARU TERDETEKSI!");
  console.log(JSON.stringify(data, null, 2));
  fs.appendFileSync("token_detected.log", JSON.stringify(data) + "\n");
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("👋 Listener aktif di /webhook (Render)");
});

app.listen(PORT, () => {
  console.log(`📡 Listener aktif di port ${PORT}`);
});