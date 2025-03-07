import { HashLink } from "react-router-hash-link";
import "../styles/HeroSection.css";
import profileImage from "../assets/images/CVzdjecie.jpg";
import reactIcon from "../assets/svg/technologis/reactIcon.svg";
import scrollIcon from "../assets/svg/arrow-down.svg";

const HeroSection = ({ onClose }) => {
	return (
		<section className="hero">
			<div className="hero-image-container">
				<div className="image-glow"></div>
				<img src={profileImage} alt="Marta" className="hero-image" />
			</div>
			<div className="hello-world-container">
				<p className="hello-world">Hello World!</p>
			</div>
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

				<a
					href="https://drive.google.com/file/d/13vhRTYQJIbMMiPU4ZA_0uZn5a8iaSjre/view?usp=drive_link"
					download
					className="hero-button"
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
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
