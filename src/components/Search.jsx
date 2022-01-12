import { useState } from 'react';
// import icons
import { FiSearch } from "react-icons/fi";

const Search = () => {

  const [value,setValue] =useState('')
  const [isOpen,setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <input type='text' className={`grow bg-black text-white mr-1 rounded-md px-2 py-1 border-white`} placeholder="Search..." value={value} onChange={(e) => setValue(e.target.value)}/>}
      <div className="px-2 py-1 ">
        <FiSearch className="stroke-white  cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}/>
      </div>
    </>
  )
}

export default Search
