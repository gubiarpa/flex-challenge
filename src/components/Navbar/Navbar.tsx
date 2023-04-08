import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { GiFeatheredWing } from "react-icons/gi";
import { MdDashboard, MdShoppingCart } from "react-icons/md";

import "./Navbar.scss";

interface OptionItem {
	label: string;
	icon: React.ReactNode;
}

const optionsItems: OptionItem[] = [
	{ label: "Dashboard", icon: <MdDashboard /> },
	{ label: "Purchase", icon: <MdShoppingCart /> },
];

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
					{optionsItems.map(({ label, icon }) => (
						<li title={label} className={"nav-container__options__item"}>
							<span>{icon}</span>
							{!collapsed && (
								<span className={"nav-container__options__item__title"}>
									{label}
								</span>
							)}
						</li>
					))}
				</ul>
				<div
					className={`nav-container__collapse`}
					onClick={() => toggleCollapsed()}
				>
					{collapsed ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />}
				</div>
			</nav>
		</aside>
	);
};
