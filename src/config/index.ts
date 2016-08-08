import * as _ from "lodash";

const env: string = process.env.NODE_ENV || "development";

const config: any = {
  host: process.env.SERVER_HOST || "0.0.0.0",
  port: process.env.SERVER_PORT || 3000,
  timezone: process.env.SERVER_TIMEZONE || "UTC",
  logLevel: process.env.LOG_LEVEL || (env === "development" ? "trace" : "warn"),
  pg: {
    client: "pg",
    driver: "pg",
    connection: {
      charset: process.env.CHARSET || "utf8",
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      timezone: "UTC",
      user: process.env.POSTGRES_USER
      // password is optional.
      // password: process.env.POSTGRES_PASSWORD,
    }
  }
};

// Load config file
try {
  _.merge(config, require("./" + env));
} catch (err) {
  console.log("Failed to load config:", env);
}

export default config;
