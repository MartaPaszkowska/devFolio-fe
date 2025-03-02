import LinkedInIcon from "../assets/svg/linkedin.svg";
import GitHubIcon from "../assets/svg/github.svg";
import "../styles/Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="logo">
					<span className="dev">Dev</span>
					<span className="folio">Folio</span>
				</div>

				<div className="social-icons">
					<a
						href="https://www.linkedin.com/in/marta-paszkowska-282504263/"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="icon"
							src={LinkedInIcon}
							alt="LinkedIn Icon"
						/>
					</a>
					<a
						href="https://github.com/MartaPaszkowska"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="icon"
							src={GitHubIcon}
							alt="GitHub Icon"
						/>
					</a>
				</div>
			</div>

			<div className="footer-bottom">
				<p>
					© 2025 Devfolio. All rights reserved. Developted by Marta J
					Paszkowska
				</p>
			</div>
		</footer>
	);
};

export default Footer;
