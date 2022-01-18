import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import global context
import { useGlobalContext } from "../context";

const SingleFilm = () => {
	// find id form single film
	const { id } = useParams();
	// api single film
	const urlSinglePage = `https://imdb-api.com/en/API/Title/k_8d46y2yj/${id}`;
	// data single film
	const [singleFilm, setSingleFilm] = useState([]);

	const { isLoading, setIsLoading } = useGlobalContext();

	const fetchSingleFilm = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(urlSinglePage);
			const data = await response.json();
			if (data) {
				const {
					genres,
					directors,
					stars,
					plot,
					tagline,
					image: img,
					fullTitle: title,
					runtimeStr: time,
					releaseDate: date,
					imDbRating: rating,
					imDbRatingVotes: votes,
				} = data;
				const newFilm = {
					genres,
					directors,
					stars,
					plot,
					img,
					title,
					time,
					date,
					rating,
					votes,
					tagline,
				};
				setSingleFilm(newFilm);
			}
			console.log(data);
		} catch (error) {
			throw new Error("error");
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchSingleFilm();
	}, [id]);

	if (!singleFilm) {
		return (
			<div className="pt-28 container mx-auto">
				<h2>Can't find a movie</h2>
			</div>
		);
	}

	const {
		genres,
		directors,
		stars,
		plot,
		img,
		title,
		time,
		date,
		rating,
		votes,
		tagline,
	} = singleFilm;

	return (
		<>
			<article className="container  max-w-3xl mx-auto">
				<div className="flex flex-row my-28 justify-between">
					<div className="xs:w-64 w-64">
						<img src={img} alt={title} />
					</div>
					<div>
						<h2 className="mb-2">{title}</h2>
						<div className="flex flex-row">
							<span>{date}</span>
							<span className="mx-4">{genres}</span>
							<span>{time === 0 ? "" : time}</span>
						</div>
						<div className="flex flex-row my-3">
							<span>
								{rating === "" || rating === null
									? "No rating"
									: `${parseFloat(rating).toFixed(1)}`}
							</span>
							<span className="mx-4">{votes} votes</span>
							<span>Dodaj do ulubionych</span>
						</div>
						<p className="italic opacity-70">{tagline}</p>
						<p className="max-w-md my-3">
							{plot && `${plot.substring(0, 200)}...`}
						</p>
						<h3 className="font-bold mb-1 capitalize">stars:</h3>
						<p>{stars}</p>
						<h3 className="capitalize mt-3 mb-1 font-bold">directors:</h3>
						<p>{directors}</p>
					</div>
				</div>
			</article>
		</>
	);
};

export default SingleFilm;
