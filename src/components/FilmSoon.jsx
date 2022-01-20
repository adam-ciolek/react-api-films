import { Link } from "react-router-dom";

const FilmSoon = ({ soon }) => {
	if (soon.length <= 0) {
		return <h1 className="capitalize">there are no movies</h1>;
	}

	return (
		<>
			{soon.map((movie) => {
				const { id, image, fullTitle } = movie;
				return (
					<article
						key={id}
						className="bg-darkbg rounded text-center transition hover:scale-90 py-4"
					>
						<Link to={`${id}`}>
							<img src={image} alt={fullTitle} className="mx-auto py-3" />
							<h4 className="px-2 text-sm">{fullTitle}</h4>
						</Link>
					</article>
				);
			})}
		</>
	);
};

export default FilmSoon;
