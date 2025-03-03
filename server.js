const express = require("express");
const cors = require("cors");
const { ENTRIES_DATA } = require("./questions");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;
const CLIENT_ORIGINS = process.env.CLIENT_ORIGINS
  ? process.env.CLIENT_ORIGINS.split(",")
  : ["http://localhost:5173", "https://globetrotter-client.vercel.app"];

app.use(
  cors({
    origin: CLIENT_ORIGINS,
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

app.get("/", (req, res) =>
  res.json({ message: "Welcome to the City Quiz API!" })
);

app.get("/question", (req, res) => {
  if (!ENTRIES_DATA || ENTRIES_DATA.length === 0) {
    return res.status(500).json({ error: "No questions available" });
  }
  const randomQuestion =
    ENTRIES_DATA[Math.floor(Math.random() * ENTRIES_DATA.length)];
  res.json(randomQuestion);
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
