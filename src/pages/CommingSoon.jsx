import Films from "../components/Films";
import FilmSoon from "../components/FilmSoon";
// import global context
import { useGlobalContext } from "../context";

const CommingSoon = () => {
	const { soon } = useGlobalContext();
	const time = new Date().getFullYear();
	return (
		<div className="min-h-screen container mx-auto mt-32">
			<div className="flex justify-between">
				<h4 className="capitalize font-bold">comming soon</h4>
				<h4 className="font-bold">in {time}</h4>
			</div>
			<div className="h-px w-full bg-white opacity-30 mt-6"></div>
			<div className="my-32">
				<Films>
					<FilmSoon soon={soon} />
				</Films>
			</div>
		</div>
	);
};

export default CommingSoon;
