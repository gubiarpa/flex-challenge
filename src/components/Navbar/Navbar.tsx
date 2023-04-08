import { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { GiFeatheredWing } from "react-icons/gi";
import { MdDashboard, MdShoppingCart } from "react-icons/md";

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
						<span className={`nav-container__appname ${isCollapsed()}`}>
							App Name
						</span>
					)}
				</div>
			</h1>
			<nav className={"nav-container__subtitle"}>
				<ul className={`nav-container__options`}>
					<li className={"nav-container__options__item"}>
						<MdDashboard />
						<span className={"nav-container__options__item__title"}>
							Dashboard
						</span>
					</li>
					<li className={"nav-container__options__item"}>
						<MdShoppingCart />
						<span className={"nav-container__options__item__title"}>
							Purchase
						</span>
					</li>
				</ul>
				<div
					className={`nav-container__collapse`}
					onClick={() => toggleCollapsed()}
				>
					<AiOutlineDoubleLeft />
				</div>
			</nav>
		</aside>
	);
};
