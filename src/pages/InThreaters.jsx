// import global context
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context"

const InThreaters = () => {

  const {isLoading,threaters} = useGlobalContext();

  return (
    <div>
      <div className='container mx-auto min-h-screen mt-32'>
      <div className="flex items-center justify-between">
        <h4 className='capitalize'>in InThreaters</h4>
      </div>
      <div className="h-px w-full bg-white opacity-30 mt-6"></div>
      <div className="my-32">
        <div className="lg:grid-cols-6 md:grid-cols-2 xs:grid-cols-1 grid gap-4 my-28 auto-rows-fr">
          {threaters.map(threater => {
            const {id, image,fullTitle} = threater;
            return(
              <article key={id} className="bg-darkbg  rounded text-center transition hover:scale-90">
                <Link to='/' >
                  <img src={image} alt={fullTitle}  className="mx-auto py-3"/>
                  <h4 className="pb-2 px-2 text-sm">{fullTitle}</h4>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
    </div>
  )
}

export default InThreaters
