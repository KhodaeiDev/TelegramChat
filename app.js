const express = require("express");
const path = require("path");
const namespaceRouter = require("./routes/nameSpace");

const app = express();

//* Body Parser
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

//* Cors Policy

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//* Template Engine

//* Routes
app.use("/namespace", namespaceRouter);
//* 404 Error Handller

module.exports = app;
