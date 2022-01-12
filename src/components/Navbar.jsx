
// import Components
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <Hamburger />
      <Search />
    </div>
  )
}

export default Navbar
