import { Navbar } from "./components/Navbar/Navbar";

import "./App.scss";
import { Main } from "./components/Main/Main";

function App() {
	return (
		<section className="App">
			<Navbar />
			<Main />
		</section>
	);
}

export default App;
