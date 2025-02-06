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
