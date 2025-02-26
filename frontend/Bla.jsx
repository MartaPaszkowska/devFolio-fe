import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AboutSection.css";
import ReadMore from "../components/ReadMore";

const AboutSection = () => {
	const [aboutText, setAboutText] = useState("");

	useEffect(() => {
		const fetchAboutData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3000/api/about"
				);
				setAboutText(response.data.description);
			} catch (error) {
				console.error("Error fetching about data:", error);
			}
		};

		fetchAboutData();
	}, []);

	return (
		<section className="about">
			<h2>About Me</h2>
			<ReadMore
				text={aboutText}
				maxLength={200}
				buttonClass="about-read-more-button"
			/>
		</section>
	);
};

export default AboutSection;
