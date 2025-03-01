import express from "express";
import logger from "morgan";
import cors from "cors";

import "dotenv/config";

import projectsRoutes from "./routes/api/projects.js";
import connectDB from "./data-db.js";

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

export default app;
