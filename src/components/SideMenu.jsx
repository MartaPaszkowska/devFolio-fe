import { HashLink } from "react-router-hash-link";
import "../styles/SideMenu.css";
import closeIcon from "../assets/svg/x.svg";
import { memo } from "react";

const SideMenu = ({ isOpen, onClose }) => {
	return (
		<div className={`side-menu ${isOpen ? "open" : ""}`}>
			<button
				className="close-button"
				onClick={onClose}
				aria-label="Close menu"
			>
				<img src={closeIcon} alt="Close" />
			</button>
			<HashLink smooth to="/#hero" onClick={onClose}>
				Home
			</HashLink>
			<HashLink smooth to="/#about" onClick={onClose}>
				About Me
			</HashLink>
			<HashLink smooth to="/#projects" onClick={onClose}>
				Projects
			</HashLink>
			<HashLink smooth to="/#contact" onClick={onClose}>
				Contact
			</HashLink>
		</div>
	);
};

export default memo(SideMenu);
