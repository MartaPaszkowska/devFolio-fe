{
	projects.map((project, index) => (
		<div key={index} className="project-item">
			<div className="project-content">
				<h2>{project.title}</h2>
				<p>
					<strong>Technologies:</strong>{" "}
					{project.technologies.join(", ")}
				</p>
				<ReadMore text={project.description} maxLength={150} />
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
				alt={`${project.title} screenshot`}
				className="project-image"
			/>
		</div>
	));
}
