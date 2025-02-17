import React from "react";
import { projects } from "../data/projectsData";
import ReadMore from "../components/ReadMore";
import "../styles/ProjectsSection.css";
import { memo } from "react";

function ProjectsSection() {
	return (
		<section className="projects">
			<h2>Projects</h2>
			{projects.map((project, index) => (
				<div key={index} className="project-item">
					<div className="project-content">
						<h2 className="project-title">{project.title}</h2>
						<p className="project-technologies">
							Technologies: {project.technologies.join(", ")}
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
					/>
				</div>
			))}
		</section>
	);
}

export default memo(ProjectsSection);
