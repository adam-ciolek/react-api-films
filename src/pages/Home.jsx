// import slider
import SliderImage from "../components/Slider";
// import components
import Film from "../components/Film";
import Films from "../components/Films";
import FilterFilms from "../components/FilterFilms";
import { useGlobalContext } from "../context";

const Home = () => {
	const { popularMovie } = useGlobalContext();
	return (
		<>
			<SliderImage />
			<div className="container mx-auto text-white">
				<FilterFilms />
				<Films>
					<Film popularMovie={popularMovie} />
				</Films>
			</div>
		</>
	);
};

export default Home;
