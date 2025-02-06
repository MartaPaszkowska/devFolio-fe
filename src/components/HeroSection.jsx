import "../styles/HeroSection.css";
import profileImage from "../assets/images/CVzdjecie.jpg";

function HeroSection() {
	return (
		<section className="hero">
			<p>Hello world!</p>
			<div className="hero-image-container">
				<div className="image-glow"></div>
				<img src={profileImage} alt="Marta" className="hero-image" />
			</div>
			<h1>My name is Marta. I'm a developer specializing in React.</h1>

			<button>Hire Me</button>
			<button>Download Resume</button>
		</section>
	);
}

export default HeroSection;
