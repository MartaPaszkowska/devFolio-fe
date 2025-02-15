import { useSelector, useDispatch } from "react-redux";
import { toggleReadMore } from "../features/readMoreSlice";
import "../styles/ReadMore.css";

const ReadMore = ({
	text,
	maxLength = 100,
	buttonClass = "read-more-button",
}) => {
	const isExpanded = useSelector((state) => state.readMore.isExpanded);
	const dispatch = useDispatch();

	return (
		<div className="read-more-text">
			<p>{isExpanded ? text : text.substring(0, maxLength) + "..."}</p>
			<button
				onClick={() => dispatch(toggleReadMore())}
				className={buttonClass}
			>
				{isExpanded ? "Read less" : "Read more"}
			</button>
		</div>
	);
};

export default ReadMore;
