import "../styles/AboutSection.css";
import aboutText from "../data/aboutData";
import ReadMore from "../components/ReadMore";

const AboutSection = () => {
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
