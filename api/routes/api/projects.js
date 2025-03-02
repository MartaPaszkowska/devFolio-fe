import express from "express";

const router = express.Router();

import listOfProjects from "../../controllers/listOfProjects.js";

router.get("/", async (req, res, next) => {
	try {
		const projects = await listOfProjects();
		res.status(200).json(projects);
	} catch (error) {
		next(error);
	}
});

export default router;
