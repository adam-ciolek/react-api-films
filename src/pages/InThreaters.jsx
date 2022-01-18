// import global context
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
// import components
import Films from "../components/Films";
import FilmThreaters from "../components/FilmThreaters";

const InThreaters = () => {
	const { isLoading, threaters } = useGlobalContext();

	return (
		<div>
			<div className="container mx-auto min-h-screen mt-32">
				<div className="flex items-center justify-between">
					<h4 className="capitalize font-bold">in InThreaters</h4>
				</div>
				<div className="h-px w-full bg-white opacity-30 mt-6"></div>
				<div className="my-32">
					<Films>
						<FilmThreaters threaters={threaters} />
					</Films>
				</div>
			</div>
		</div>
	);
};

export default InThreaters;
