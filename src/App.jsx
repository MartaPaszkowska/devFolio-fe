import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<Router>
			<SharedLayout>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</SharedLayout>
		</Router>
	);
}

export default App;
