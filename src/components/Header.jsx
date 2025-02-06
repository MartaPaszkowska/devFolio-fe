import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<nav className="nav">
				<Link to="/#hero">Home</Link>
				<Link to="/#about">About</Link>
				<Link to="/#projects">Projects</Link>
				<Link to="/#contact">Contact</Link>
			</nav>
		</header>
	);
}

export default Header;
