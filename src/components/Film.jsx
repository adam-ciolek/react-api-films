import { Link } from "react-router-dom";
// import global context
import { useGlobalContext } from "../context";

const Film = ({ popularMovie }) => {
	const { filter, isLoading, busy, fetchDataPopular } = useGlobalContext();

	if (isLoading) {
		return <h2 className="capitalize text-center">loading...</h2>;
	}

	if (busy) {
		return (
			<div className="absolute px-4">
				<h2>{busy} , We are so sorry for the inconvenience</h2>
			</div>
		);
	}

	return (
		<>
			{popularMovie
				.filter((movie) => {
					if (filter === "") {
						return movie;
					} else if (movie.title.toLowerCase().includes(filter.toLowerCase())) {
						return movie;
					}
				})
				.map((movie) => {
					const { id, title, image } = movie;
					return (
						<Link
							to={`movie/${id}`}
							key={id}
							className="bg-darkbg px-4 pt-4 rounded text-center transition hover:scale-90 "
						>
							<img src={image} alt={title} className="mx-auto py-4" />
							<h4 className="pb-2 px-2 text-sm">{title}</h4>
						</Link>
					);
				})}
		</>
	);
};

export default Film;
