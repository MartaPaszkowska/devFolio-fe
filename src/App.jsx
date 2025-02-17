import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
	return (
		<Suspense fallback={<div>Loanding...</div>}>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Router>
		</Suspense>
	);
}

export default App;
