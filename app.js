const express = require("express");
const namespaceRouter = require("./routes/nameSpace");

const app = express();

//* Body Parser
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

//* Cors Policy

//* Template Engine

//* Routes
app.use("/namespace", namespaceRouter);
//* 404 Error Handller

module.exports = app;
