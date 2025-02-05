import Header from "./Header";
import Footer from "./Footer";

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
