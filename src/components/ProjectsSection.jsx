import React, { useEffect, useState } from "react";
import axios from "axios";
import ReadMore from "../components/ReadMore";
import "../styles/ProjectsSection.css";

const ProjectsSection = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const API_URL = import.meta.env.VITE_API_URL;
				const response = await axios.get(`${API_URL}/api/projects`);
				setProjects(response.data);
			} catch (error) {
				setError("Failed to download projects.");
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	if (loading)
		return (
			<div className="loading-container">
				<div className="spinner"></div>
				<p className="loading-text">Loading projects...</p>
			</div>
		);
	if (error) return <p>{error}</p>;

	return (
		<section className="projects">
			<h2>Projects</h2>
			{projects.map((project, index) => (
				<div
					key={index}
					className={`project-item ${
						index % 2 === 0 ? "slide-in-left" : "slide-in-right"
					}`}
				>
					<div className="project-content">
						<h2 className="project-title">{project.title}</h2>
						<p className="project-technologies">
							Technologies: {project.technologies}
						</p>
						<ReadMore
							text={project.description}
							maxLength={150}
							className="project-description"
						/>
						<div className="project-links">
							<a
								href={project.liveLink}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								Live version
							</a>
							<a
								href={project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								GitHub
							</a>
						</div>
					</div>
					<img
						src={project.image}
						alt={project.title}
						className="project-image"
						loading="lazy"
						referrerPolicy="no-referrer"
					/>
				</div>
			))}
		</section>
	);
};

export default ProjectsSection;
