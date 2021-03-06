// import icons
import { FiSearch } from "react-icons/fi";
// import global context
import { useGlobalContext } from "../context";

const Search = () => {
	const { setFilter } = useGlobalContext();

	return (
		<>
			<div className="flex grow  sm:w-8/12 ml-1 lg:w-auto lg:ml-1 ">
				<input
					type="text"
					className="animate-search grow bg-black text-white sm:mr-1 rounded-md px-2 py-1 border-t-0 border-l-0 border-r-0 border-2 border-b-sky outline-0 "
					placeholder="Search..."
					onChange={(e) => setFilter(e.target.value)}
				/>
				<div className="px-2 py-1 text-left sm:block hidden">
					<FiSearch className="stroke-white  cursor-pointer text-2xl" />
				</div>
			</div>
		</>
	);
};

export default Search;
