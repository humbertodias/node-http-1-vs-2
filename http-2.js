const port = process.env.PORT || 3002;
import spdy from "spdy";
import express from "express";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

app.use("/img", express.static("img"));

const options = {
  key: fs.readFileSync(`${__dirname}/server.key`),
  cert: fs.readFileSync(`${__dirname}/server.crt`),
};

spdy.createServer(options, app).listen(port, (error) => {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log("Listening on port: https://localhost:" + port);
  }
});
