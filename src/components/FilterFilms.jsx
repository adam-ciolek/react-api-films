// import data
import { filters } from "../data";
import Search from "./Search";
import { useGlobalContext } from "../context";

const FilterFilms = () => {
	const {
		action,
		setAction,
		setPolpularIsOpen,
		popularIsOpen,
		setPopularMovie,
	} = useGlobalContext();

	const handleSearch = (e) => {
		console.log(action);
		// setPopularMovie([]);
		setPolpularIsOpen(!popularIsOpen);
		const target = e.target.id;
		console.log(target);
		const urlFilters = `https://imdb-api.com/API/AdvancedSearch/k_8d46y2yj?genres=${target}`;
		fecthData(urlFilters);
		console.log(action);
	};

	const fecthData = (url) => {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				if (data) {
					setAction([]);
					setAction(data.results);
				}
			});
	};

	return (
		<>
			<div className="flex justify-between items-center">
				<h4 className="capitalize font-bold">recommanded movie</h4>
				<Search />
				<ul>
					{filters.map((filter) => {
						const { id, title } = filter;
						return (
							<li key={id} className="inline ml-8">
								<button
									id={id}
									className="capitalize relative  before:absolute before:-bottom-1  before:right-0 before:h-px before:w-full before:transition  before:delay-75 before:bg-sky before:origin-bottom-right before:scale-0
                  hover:before:scale-100 hover:before:origin-bottom-left"
									onClick={handleSearch}
								>
									{title}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="h-px w-full bg-white opacity-30 mt-6"></div>
		</>
	);
};

export default FilterFilms;
