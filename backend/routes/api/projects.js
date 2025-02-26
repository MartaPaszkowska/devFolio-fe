const express = require("express");

const router = express.Router();

const listOfProjects = require("../../controllers/listOfProjects.js");

router.get("/", async (req, res, next) => {
	try {
		const projects = await listOfProjects();
		res.status(200).json(projects);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
