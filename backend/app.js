const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const projectsRoutes = require("./routes/api/projects.js");
const connectDB = require("./data-db.js");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// Routing
app.use("/api/projects", projectsRoutes);

app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode).json({ message: err.message });
});

connectDB();

module.exports = app;
