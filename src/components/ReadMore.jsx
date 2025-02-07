import { useState } from "react";
import "../styles/ReadMore.css";

function ReadMore({ text, maxLength = 100 }) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleReadMore = () => setIsExpanded(!isExpanded);

	return (
		<div className="read-more-text">
			<p>{isExpanded ? text : text.substring(0, maxLength) + "..."}</p>
			<button onClick={toggleReadMore} className="read-more-button">
				{isExpanded ? "Czytaj mniej" : "Czytaj więcej"}
			</button>
		</div>
	);
}

export default ReadMore;
