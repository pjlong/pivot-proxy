const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;
const whitelist = process.env.CORSANYWHERE_WHITELIST || "http://localhost:4200";

const corsProxy = require("cors-anywhere");

corsProxy
  .createServer({
    originWhitelist: whitelist.split(","),
    requireHeader: ["origin", "X-TrackerToken"],
    removeHeaders: []
  })
  .listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
  });
