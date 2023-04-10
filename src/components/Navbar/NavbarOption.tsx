interface NavbarOptionProps {
	label: string;
	icon: React.ReactNode;
	collapsedClass: string;
}

export const NavbarOption = ({
	label,
	icon,
	collapsedClass,
}: NavbarOptionProps) => {
	return (
		<li
			key={label}
			title={label}
			className={"nav-container__subtitle__options__item"}
		>
			<span>{icon}</span>
			<span
				className={`nav-container__subtitle__options__item__label ${collapsedClass}`}
			>
				{label}
			</span>
		</li>
	);
};
