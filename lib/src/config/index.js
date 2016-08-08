"use strict";
var _ = require("lodash");
var env = process.env.NODE_ENV || "development";
var config = {
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
        }
    }
};
// Load config file
try {
    _.merge(config, require("./" + env));
}
catch (err) {
    console.log("Failed to load config:", env);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config;
//# sourceMappingURL=index.js.map