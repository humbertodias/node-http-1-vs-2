const port = 3001;
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

app.use("/img", express.static("img"));

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log("Listening on port: http://localhost:" + port);
  }
});
