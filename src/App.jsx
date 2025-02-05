import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
	return (
		<Router>
			<SharedLayout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</SharedLayout>
		</Router>
	);
}

export default App;
