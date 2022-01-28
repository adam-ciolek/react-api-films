// import Components

import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { NavLinks } from "./NavLinks";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between ">
			<Logo />
			<Hamburger />
			<NavLinks />
		</div>
	);
};

export default Navbar;
