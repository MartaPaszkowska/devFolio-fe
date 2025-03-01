import mongoose from "mongoose";

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

export default Project;
