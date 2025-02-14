import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleExpand } from "../features/aboutSlice.js"; // Import akcji Redux
import "../styles/AboutSection.css"; // Zachowano ścieżkę do styli
import aboutText from "../data/aboutData"; // Zachowano import danych

const AboutSection = () => {
	// Pobieramy stan `isExpanded` z Redux Store
	const isExpanded = useSelector((state) => state.about.isExpanded);
	const dispatch = useDispatch();

	return (
		<section className="about">
			<h2>About Me</h2>
			<p>
				{isExpanded ? aboutText : `${aboutText.substring(0, 200)}...`}
			</p>
			<button onClick={() => dispatch(toggleExpand())}>
				{isExpanded ? "Read Less" : "Read More"}
			</button>
		</section>
	);
};

export default AboutSection;
