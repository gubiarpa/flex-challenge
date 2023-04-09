import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Dashboard } from "./pages";

import "./App.scss";

function App() {
	return (
		<section className="App">
			<Navbar />
			<main className="main-container">
				<Routes>
					<Route path="/" element={<Dashboard />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
