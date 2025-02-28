const express = require("express");
const bodyParser = require("body-parser");
const { ENTRIES_DATA } = require("./questions");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  })
);

const PORT = 4000;

app.use(bodyParser.json());

app.get("/question", (req, res) => {
  const randomIndex = Math.floor(Math.random() * ENTRIES_DATA.length);
  const randomQuestion = ENTRIES_DATA[randomIndex];
  req.session.currentQuestion = randomQuestion;
  res.json(randomQuestion);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
