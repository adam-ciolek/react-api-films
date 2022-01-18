import React, { useState, useContext, useEffect } from "react";

// api most popular movies (100)
const url = "https://imdb-api.com/en/API/MostPopularMovies/k_8d46y2yj";
// api comming soon
const urlSoon = "https://imdb-api.com/en/API/ComingSoon/k_8d46y2yj";
// api in threaters
const urlThreates = "https://imdb-api.com/en/API/InTheaters/k_8d46y2yj";
// api youtube trailer
const urlTrailer =
	"https://imdb-api.com/en/API/YouTubeTrailer/k_8d46y2yj/tt1375666";

const MyContext = React.createContext();

const MyStorage = ({ children }) => {
	const [search, setSearch] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	// data recommanded Movie
	const [popularMovie, setPopularMovie] = useState([]);
	const [popularIsOpen, setPolpularIsOpen] = useState(true);
	// data comming soon
	const [soon, setSoon] = useState([]);
	// data threaters
	const [threaters, setThreates] = useState([]);
	// slider
	const [slider, setSlider] = useState([]);
	// Movie action
	const [action, setAction] = useState([]);

	// Most Popular Movies data
	const fetchDataPopular = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			setPopularMovie(data.items);
			// take five picture for slider
			if (data) {
				const slide = data.items;
				const newSlide = slide.slice(0, 6);
				return setSlider(newSlide);
			}
			setIsLoading(false);
		} catch (error) {
			throw new Error("error");
			setIsLoading(false);
		}
	};

	// In Threaters data
	const fetchDataThreaters = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(urlThreates);
			const data = await response.json();
			if (data) {
				setThreates(data.items);
				setIsLoading(false);
			}
		} catch (error) {
			throw new Error("error");
			setIsLoading(false);
		}
	};

	// Cooming Soon data
	const fetchDataSoon = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(urlSoon);
			const data = await response.json();
			if (data) {
				setSoon(data.items);
				setIsLoading(false);
			}
		} catch (error) {
			throw new Error("error");
			setIsLoading(false);
		}
	};
	// search movie
	const handleSearch = (e) => {
		const target = e.target.value;
		const newFilm = popularMovie.filter((value) =>
			value.title.toLowerCase().includes(target.toLowerCase())
		);
		return target === "" ? fetchDataPopular() : setPopularMovie(newFilm);
	};

	useEffect(() => {
		fetchDataPopular();
	}, []);

	useEffect(() => {
		fetchDataThreaters();
		fetchDataSoon();
	}, []);

	return (
		<MyContext.Provider
			value={{
				isLoading,
				setIsLoading,
				search,
				setSearch,
				slider,
				popularMovie,
				threaters,
				soon,
				setPopularMovie,
				popularIsOpen,
				setPolpularIsOpen,
				action,
				setAction,
				handleSearch,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(MyContext);
};

export { MyContext, MyStorage };
