const express = require("express");
const cors = require("cors");

const jobRoutes = require("./src/routes/jobs.routes")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes)

module.exports = app;
