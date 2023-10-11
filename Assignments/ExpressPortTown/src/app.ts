import express from "express";
import { config } from "dotenv";
config();

const MSG = process.env.WELCOME_MESSAGE;
const app = express();
app.get("/", (req, res) => {
  res.send(MSG);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
