import { MdViewModule,MdViewQuilt } from "react-icons/md";

const Favorite = () => {
  return (
    <div className='container mx-auto min-h-screen mt-32'>
      <div className="flex items-center justify-between">
        <h4 className='capitalize'>favorite</h4>
        <div className="flex">
          <MdViewModule  className="text-2xl cursor-pointer"/>
          <MdViewQuilt  className="text-2xl cursor-pointer"/>
        </div>
      </div>
      <div className="h-px w-full bg-white opacity-30 mt-6"></div>
    </div>
  )
}

export default Favorite