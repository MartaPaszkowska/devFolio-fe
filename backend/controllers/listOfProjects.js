const Project = require("../models/projectSchema.js");

async function listOfProjects() {
	try {
		const projects = await Project.find();
		return projects;
	} catch (error) {
		console.error("Błąd podczas pobierania kontaktów:", error.message);
		throw error;
	}
}

module.exports = listOfProjects;
