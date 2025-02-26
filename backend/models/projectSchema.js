const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	technologies: {
		type: String,
	},
	description: {
		type: String,
	},
	liveLink: {
		type: String,
	},
	githubLink: {
		type: String,
	},
	image: {
		type: String,
	},
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
