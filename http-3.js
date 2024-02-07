const port = 3003;
import { createServer } from "node:http";
import { createApp, eventHandler, createRouter, toNodeListener } from "h3";
import fs from "fs";

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
createServer(toNodeListener(app)).listen(port, (error) => {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log("Listening on port: https://localhost:" + port);
  }
});
