import "../styles/TechnologisSection.css";
import cssIcon from "../assets/svg/technologis/css3.svg";
import jsIcon from "../assets/svg/technologis/javascript.svg";
import nodeIcon from "../assets/svg/technologis/node.svg";
import htmlIcon from "../assets/svg/technologis/html-five.svg";
import reactIcon from "../assets/svg/technologis/reactIcon.svg";
import viteIcon from "../assets/svg/technologis/vite.svg";
import postmanIcon from "../assets/svg/technologis/postman.svg";
import mongoIcon from "../assets/svg/technologis/mongodb.svg";
import figmaIcon from "../assets/svg/technologis/figma-icon.svg";
import { memo } from "react";

function TechnologisSection() {
	return (
		<section className="tech">
			<h2>Technologies</h2>
			<ul className="tech-svg">
				<li>
					<img className="tech-icon" src={cssIcon} alt="CSS" />
				</li>
				<li>
					<img className="tech-icon" src={jsIcon} alt="JavaScript" />
				</li>
				<li>
					<img className="tech-icon" src={nodeIcon} alt="Node.js" />
				</li>
				<li>
					<img className="tech-icon" src={htmlIcon} alt="HTML5" />
				</li>
				<li>
					<img className="tech-icon" src={reactIcon} alt="React.js" />
				</li>
				<li>
					<img className="tech-icon" src={viteIcon} alt="Vite" />
				</li>
				<li>
					<img
						className="tech-icon"
						src={postmanIcon}
						alt="Postman"
					/>
				</li>
				<li>
					<img className="tech-icon" src={mongoIcon} alt="mongoDB" />
				</li>
				<li>
					<img className="tech-icon" src={figmaIcon} alt="figma" />
				</li>
			</ul>
		</section>
	);
}
export default memo(TechnologisSection);
