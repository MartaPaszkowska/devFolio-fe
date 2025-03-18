import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>
		</Suspense>
	);
};

export default App;
