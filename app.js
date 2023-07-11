const express = require("express");
const app = express();
const toursRouter = require("./tours");
const { configDotenv } = require("dotenv");

console.log(process.env);
configDotenv({ path: "./config.env" });
console.log(process.env);

app.use(express.json());
app.use("/api/v1/tours", toursRouter);
app.use(express.static(`${__dirname}/public`));

module.exports = app;
