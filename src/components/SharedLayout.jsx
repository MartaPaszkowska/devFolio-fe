import Header from "./Header";
import Footer from "./Footer";
import "../styles/sharedLayout.css";
function SharedLayout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default SharedLayout;
