import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechnologisSection from "../components/TechnologisSection";
import ProjectsSection from "../components/ProjectsSection";
import DesignerSection from "../components/DesignerSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import "../styles/main.css";

const HomePage = () => {
	return (
		<div className="container">
			<section>
				<Header />
			</section>
			<section id="hero">
				<HeroSection />
			</section>
			<section id="about">
				<AboutSection />
			</section>
			<section id="about">
				<TechnologisSection />
			</section>
			<section id="projects">
				<ProjectsSection />
			</section>
			<section id="designer">
				<DesignerSection />
			</section>
			<section id="contact">
				<ContactSection />
			</section>
			<section>
				<Footer />
			</section>
		</div>
	);
};

export default HomePage;
