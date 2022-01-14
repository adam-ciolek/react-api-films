// import icons
import { FiSearch } from "react-icons/fi";
// import global context
import { useGlobalContext } from "../context";

const Search = () => {

  const {search,setSearch} = useGlobalContext()

  return (
    <>
    <div className="flex grow px-8 justify-end ">
      {search && <input type='text' className= 'animate-search grow bg-black text-white mr-1 rounded-md px-2 py-1 border-t-0 border-l-0 border-r-0 border-2 border-b-sky outline-0' placeholder="Search..."/>
      }
      <div className="px-2 py-1 text-left ">
        <FiSearch className="stroke-white  cursor-pointer text-2xl " onClick={() => setSearch(!search)}/>
      </div>
    </div>
    </>
  )
}

export default Search
