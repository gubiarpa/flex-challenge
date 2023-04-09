import { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { GiFeatheredWing } from "react-icons/gi";
import { MdDashboard, MdShoppingCart, MdLoop } from "react-icons/md";

import "./Navbar.scss";

interface OptionItem {
	label: string;
	icon: React.ReactNode;
}

const optionsItems: OptionItem[] = [
	{ label: "Dashboard", icon: <MdDashboard /> },
	{ label: "Purchase", icon: <MdShoppingCart /> },
	{ label: "Refresh", icon: <MdLoop /> },
];

export const Navbar = () => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const toggleCollapsed = () => setCollapsed((current) => !current);
	const isCollapsed = (): string => (collapsed ? "collapsed" : "");

	return (
		<aside className={`nav-container ${isCollapsed()}`}>
			<h1 className={"nav-container__title"}>
				<span>
					<GiFeatheredWing />
				</span>
				<span className={`nav-container__title__appname ${isCollapsed()}`}>
					App Name
				</span>
			</h1>
			<nav className={"nav-container__subtitle"}>
				<ul className={`nav-container__subtitle__options`}>
					{optionsItems.map(({ label, icon }) => (
						<li
							key={label}
							title={label}
							className={"nav-container__subtitle__options__item"}
						>
							<span>{icon}</span>
							<span
								className={`nav-container__subtitle__options__item__label ${isCollapsed()}`}
							>
								{label}
							</span>
						</li>
					))}
				</ul>
				<div
					className={`nav-container__subtitle__collapse`}
					onClick={() => toggleCollapsed()}
				>
					<AiOutlineDoubleLeft
						className={`nav-container__subtitle__collapse__icon ${isCollapsed()}`}
					/>
				</div>
			</nav>
		</aside>
	);
};
