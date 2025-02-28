const express = require("express");
const bodyParser = require("body-parser");
const { ENTRIES_DATA } = require("./questions");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://globetrotter-client.vercel.app"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

const PORT = 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the City Quiz API!" });
});

app.get("/question", (req, res) => {
  const randomIndex = Math.floor(Math.random() * ENTRIES_DATA.length);
  const randomQuestion = ENTRIES_DATA[randomIndex];
  res.json(randomQuestion);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
