// import Components
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between ">
			<Logo />
			<Hamburger />
		</div>
	);
};

export default Navbar;
