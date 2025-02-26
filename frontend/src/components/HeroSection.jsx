import { HashLink } from "react-router-hash-link";
import "../styles/HeroSection.css";
import profileImage from "../assets/images/CVzdjecie.jpg";
import reactIcon from "../assets/svg/technologis/reactIcon.svg";
import resumeFile from "../assets/pdf/Marta_PaszkowskaCV_-_PL.pdf";
import scrollIcon from "../assets/svg/arrow-down.svg";

const HeroSection = (onClose) => {
	return (
		<section className="hero">
			<div className="hero-image-container">
				<div className="image-glow"></div>
				<img src={profileImage} alt="Marta" className="hero-image" />
			</div>
			<p>Hello World!</p>
			<h1>
				My name is Marta.<br></br> I'm a developer specializing in{" "}
				<img src={reactIcon} alt="React" /> React.
			</h1>
			<div className="buttons">
				<HashLink
					smooth
					to="/#designer"
					onClick={onClose}
					className="hero-button"
				>
					For Designer
				</HashLink>

				<a href={resumeFile} download className="hero-button">
					Download Resume
				</a>
			</div>
			<div className="scroll">
				<p>scroll down</p>
				<img
					src={scrollIcon}
					alt="arrow-down"
					className="bouncing-arrow"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
