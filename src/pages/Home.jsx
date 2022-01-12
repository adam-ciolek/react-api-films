// import slider
import Films from '../components/Films';
import FilterFilms from '../components/FilterFilms';
import SliderImage from '../components/Slider';


const Home = () => {
  return (
    <>
      <SliderImage />
      <div className='container mx-auto text-white'>
        <FilterFilms />
        <Films />
      </div>
    </>
  )
}

export default Home
