import { Link } from "react-router-dom";
// import global context
import { useGlobalContext } from "../context";

const Film = ({ popularMovie }) => {
	const { popularIsOpen, action } = useGlobalContext();

	// if (popularMovie.length === 0) {
	// 	return <h1>Can't find a movie</h1>;
	// }

	if (popularIsOpen && popularMovie) {
		return (
			<>
				{popularMovie.map((movie) => {
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
	}

	if (action) {
		return (
			<>
				{action.map((movie) => {
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
	}
};

export default Film;
