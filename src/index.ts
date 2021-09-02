import * as express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const router = express.Router();

router.get("/", (_, res) => {
  res.send("Server is working well!");
});

const port = process.env.SERVER_PORT !== "" ? process.env.SERVER_PORT : 3000;

app.listen(port, () => {
  console.log(`Server is running on ${process.env.SERVER_ORIGIN}:${port}`);
});
