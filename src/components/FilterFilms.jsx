// import data
import {filters} from '../data';
import Search from './Search';

const FilterFilms = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <h4>Recommanded Movie</h4>
        <Search />
        <ul>
          {filters.map(filter => {
            const {id,title} = filter;
            return (
              <li key={id} className='inline ml-8'>
                <button className='capitalize relative  before:absolute before:-bottom-1  before:right-0 before:h-px before:w-full before:transition  before:delay-75 before:bg-sky before:origin-bottom-right before:scale-0
              hover:before:scale-100 hover:before:origin-bottom-left'>
                  {title}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='h-px w-full bg-white opacity-30 mt-6'></div>
    </>
  )
}

export default FilterFilms
