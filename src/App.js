import { Routes, Route, Outlet } from "react-router-dom";
// import components
import Navbar from "./components/Navbar";
// import pages
import CommingSoon from "./pages/CommingSoon";
import InThreaters from "./pages/InThreaters";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Error from "./pages/Error";
import SingleFilm from "./pages/SingleFilm";
import Footer from "./components/Footer";

// https://i.postimg.cc/52x6kzSQ/bg.png

const App = () => {
	return (
		<div className="bg-black font-poppins tracking-wider text-white overflow-x-hidden">
			<header className="container mx-auto p-4">
				<Navbar />
			</header>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="movie/:id" element={<SingleFilm />} />
				</Route>
				<Route path="/in-threaters">
					<Route index element={<InThreaters />} />
					<Route path=":id" element={<SingleFilm />} />
				</Route>
				<Route path="/favorite" element={<Favorite />} />
				<Route path="/comming-soon">
					<Route index element={<CommingSoon />} />
					<Route path=":id" element={<SingleFilm />} />
				</Route>
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<div className="mt-16 bg-darkbg">
				<Footer />
			</div>
		</div>
	);
};

export default App;
