import "../styles/Header.css";
import { HashLink } from "react-router-hash-link";

function Header() {
	return (
		<header className="header">
			<nav className="nav">
				<HashLink smooth to="/#hero">
					Home
				</HashLink>
				<HashLink smooth to="/#about">
					About
				</HashLink>
				<HashLink smooth to="/#projects">
					Projects
				</HashLink>
				<HashLink smooth to="/#contact">
					Contact
				</HashLink>
			</nav>
		</header>
	);
}

export default Header;
