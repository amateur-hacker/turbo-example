import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { log } from "@repo/logger";

const app = express();
app
  .disable("x-powered-by")
  .use(morgan("dev"))
  .use(urlencoded({ extended: true }))
  .use(json())
  .use(cors())
  .get("/message/:name", (req, res) => {
    return res.json({ message: `hello ${req.params.name}` });
  })
  .get("/status", (_, res) => {
    return res.json({ ok: true });
  });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  log(`api running on ${port}`);
});


export default app
