import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Error = () => {
	return (
		<div className="container mx-auto min-h-screen mt-28">
			<div className="tracking-wider text-center">
				<h1 className="font-semibold text-2xl mb-10">This page not exist</h1>
				<Link to="/">
					<span className="flex justify-center items-center hover:text-sky transition">
						<IoIosArrowRoundBack className="mr-1 text-2xl" />
						Back Home
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Error;
