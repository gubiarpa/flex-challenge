import { AiOutlineDoubleLeft } from "react-icons/ai";
import { GiFeatheredWing } from "react-icons/gi";
import "./Navbar.scss";

export const Navbar = () => {
	return (
		<aside className="nav-container">
			<h1 className="nav-container__title">
				<div>
					<GiFeatheredWing />
					<span style={{ paddingLeft: "0.5rem" }}>App Name</span>
				</div>
				<div>
					<AiOutlineDoubleLeft />
				</div>
			</h1>
			<nav>
				<ul className="nav-container__options">
					<li>Opción 1</li>
					<li>Opción 2</li>
				</ul>
			</nav>
		</aside>
	);
};
