import React, { useState } from "react";
import "../styles/AboutSection.css";
import aboutText from "../data/aboutData";

function AboutSection() {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<section className="about">
			<h2>About Me</h2>
			<p>
				{isExpanded ? aboutText : `${aboutText.substring(0, 200)}...`}
			</p>
			<button onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? "Read Less" : "Read More"}
			</button>
		</section>
	);
}

export default AboutSection;
