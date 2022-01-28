// import data
import { filters } from "../data";
import Search from "./Search";
import { useGlobalContext } from "../context";

const FilterFilms = () => {
	const { setPopularMovie, setIsLoading, setBusy } = useGlobalContext();

	const handleSearch = (e) => {
		setPopularMovie([]);
		const target = e.target.id;
		console.log(target);
		const urlFilters = `https://imdb-api.com/API/AdvancedSearch/k_8d46y2yj?genres=${target}`;
		fecthData(urlFilters);
		setIsLoading(false);
	};

	const fecthData = (url) => {
		// setIsLoading(true);
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
				if (data) {
					console.log(data.results);
					setPopularMovie(data.results);
				}
				if (data.errorMessage) {
					setBusy(data.errorMessage);
				}
			});
	};

	return (
		<>
			<div className="flex justify-between items-center px-3 flex-col w-full lg:flex-row">
				<h4 className="capitalize font-bold mr-6  hidden xl:block">
					recommanded movie
				</h4>
				<Search />
				<ul className="sm:mt-4 lg:mt-0 text-center">
					{filters.map((filter) => {
						const { id, title } = filter;
						return (
							<li
								key={id}
								className="sm:inline lg:ml-8 sm:first:ml-0 sm:ml-8 flex flex-col mb-4 first:mt-6 sm:mt-auto sm:first-mt-auto"
							>
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
			<div className="h-px w-full bg-white opacity-30 mt-6 hidden sm:block"></div>
		</>
	);
};

export default FilterFilms;
