import { Link } from "react-router-dom";

const FilmThreaters = ({ threaters }) => {
	return (
		<>
			{threaters.map((threater) => {
				const { id, image, fullTitle } = threater;
				return (
					<article
						key={id}
						className="bg-darkbg  rounded text-center transition hover:scale-90 py-4"
					>
						<Link to={`${id}`}>
							<img src={image} alt={fullTitle} className="mx-auto py-3" />
							<h4 className="pb-2 px-2 text-sm">{fullTitle}</h4>
						</Link>
					</article>
				);
			})}
		</>
	);
};

export default FilmThreaters;
