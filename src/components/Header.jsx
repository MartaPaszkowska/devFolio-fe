import "../styles/Header.css";
import { HashLink } from "react-router-hash-link";
import menuIcon from "../assets/svg/menu.svg";

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<span className="dev">Dev</span>
				<span className="folio">Folio</span>
			</div>
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
			<button className="menu-button" aria-label="Open menu">
				<img src={menuIcon} alt="Menu" />
			</button>
		</header>
	);
}

export default Header;
