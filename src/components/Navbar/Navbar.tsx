import { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { GiFeatheredWing } from "react-icons/gi";

import "./Navbar.scss";

export const Navbar = () => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const toggleCollapsed = () => setCollapsed((current) => !current);
	const isCollapsed = (): string => (collapsed ? "collapsed" : "");

	return (
		<aside className={`nav-container ${isCollapsed()}`}>
			<h1 className={"nav-container__title"}>
				<div>
					<GiFeatheredWing />
					{!collapsed && (
						<span style={{ paddingLeft: "0.7rem" }}>App Name</span>
					)}
				</div>
			</h1>
			<nav className={"nav-container__subtitle"}>
				<ul className={`nav-container__options`}>
					<li>Opción 1</li>
					<li>Opción 2</li>
				</ul>
				<button onClick={() => toggleCollapsed()}>
					<AiOutlineDoubleLeft />
				</button>
			</nav>
		</aside>
	);
};
