const port = process.env.PORT || 3003;
import { createServer } from "node:http";
import { createApp, eventHandler, createRouter, toNodeListener } from "h3";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = createApp();
const router = createRouter()
  .get(
    "/",
    eventHandler(() => ({ message: "ok" }))
  )
  .get(
    "/img/:path",
    eventHandler((event) => fs.readFileSync(`img/${event.context.params.path}`))
  );

app.use(router);
const options = {
  key: fs.readFileSync(`${__dirname}/ssl/server.key`),
  cert: fs.readFileSync(`${__dirname}/ssl/server.crt`),
};

// TODO - listen(options, port) is causing a runtime exception
createServer(toNodeListener(app)).listen(port, (error) => {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log("Listening on port: http://localhost:" + port);
  }
});
