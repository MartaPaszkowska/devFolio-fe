import "../styles/Header.css";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { HashLink } from "react-router-hash-link";
import menuIcon from "../assets/svg/menu.svg";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<header className="header">
			<div className="logo">
				<span className="dev">Dev</span>
				<span className="folio">Folio</span>
			</div>
			<nav className="nav">
				<HashLink className="nav-a" smooth to="/#hero">
					Home
				</HashLink>
				<HashLink className="nav-a" smooth to="/#about">
					About
				</HashLink>
				<HashLink className="nav-a" smooth to="/#projects">
					Projects
				</HashLink>
				<HashLink className="nav-getInTouch" smooth to="/#contact">
					Get in touch
				</HashLink>
			</nav>
			<button
				className="menu-button"
				onClick={toggleMenu}
				aria-label="Open menu"
			>
				<img src={menuIcon} className="menu-icon" alt="Menu" />
			</button>
			<SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
		</header>
	);
}

export default Header;
