import { useState } from "react";
import { Link } from "react-router-dom";
// data context 
import { useGlobalContext } from "../context";

const Films = () => {

  const {popularMovie} = useGlobalContext();

  return (
    <div className="lg:grid-cols-6 md:grid-cols-2 xs:grid-cols-1 grid gap-4 my-28 auto-rows-fr">   
      {popularMovie.map(movie => {
        const {id,title,image} = movie;
        return (
          <Link to='/' key={id} className="bg-darkbg px-4 pt-4 rounded text-center transition hover:scale-90 ">
            <img src={image} alt={title}  className="mx-auto py-4"/>
            <h4 className="pb-2 px-2 text-sm">{title}</h4>
          </Link>
        )
      })}
    </div>
  )
}

export default Films
