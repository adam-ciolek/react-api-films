import { Link } from "react-router-dom";
// import global context
import { useGlobalContext } from "../context";


const CommingSoon = () => {

  const {soon} = useGlobalContext()
  
  const time = new Date().getFullYear()
  return (
    <div className='min-h-screen container mx-auto mt-32'>
      <div className='flex justify-between'>
        <h4 className='capitalize'>comming soon</h4>
        <h4>in {time}</h4>
      </div>
      <div className='h-px w-full bg-white opacity-30 mt-6'></div>
      <div className="my-32">
        <div className="lg:grid-cols-6 md:grid-cols-2 xs:grid-cols-1 grid gap-4 my-28 auto-rows-fr">
          {soon.map(movie => {
            const {id, image,fullTitle} = movie;
            return(
              <article key={id} className="bg-darkbg rounded text-center transition hover:scale-90">
                <Link to='/'>
                  <img src={image} alt={fullTitle}  className="mx-auto py-3"/>
                  <h4 className="pb-2 px-2 text-sm">{fullTitle}</h4>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CommingSoon
