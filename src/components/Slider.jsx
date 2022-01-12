import React from 'react'
// Import Swiper React components
import {Autoplay,Navigation,EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/pagination"
import "swiper/css/navigation"

const SliderImage = () => {

  return (
    <div className='py-32 mx-auto'>
    <Swiper
      modules={[Autoplay,Navigation,EffectCoverflow]}
      // autoplay={{delay:1000}}
      grabCursor={true} centeredSlides={true} slidesPerView={3}
      loop={true}
      // navigation={true}
      effect={'coverflow'}
      coverflowEffect={{
      "rotate": 50,
      "stretch": 0,
      "depth": 100,
      "modifier": 1,
      "slideShadows": true
      }} pagination={true} className="mySwiper"
      >
      <SwiperSlide>
        <div className='flex bg-darkbg p-7'>
          <img src='https://media.multikino.pl/uploads/images/films_and_events/fa3bkffst6evxxuc.jpg' alt='' className='rounded-md'/>
          <div>
            <h3 className='ml-4'>capitan</h3>
            <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur reprehenderit, provident corporis quae pariatur voluptatibus hic accusamus, enim obcaecati quibusdam? Voluptas porro corporis nisi vel in suscipit, omnis dolores?</p>
          </div>
        </div>     
      </SwiperSlide>
       
      <SwiperSlide>
        <div className='flex bg-darkbg p-7'>
          <img src='https://media.multikino.pl/uploads/images/films_and_events/fa3bkffst6evxxuc.jpg' alt='' className='rounded-md'/>
          <div>
            <h3 className='ml-4'>capitan</h3>
            <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur reprehenderit, provident corporis quae pariatur voluptatibus hic accusamus, enim obcaecati quibusdam? Voluptas porro corporis nisi vel in suscipit, omnis dolores?</p>
          </div>
        </div>     
      </SwiperSlide>
       
      <SwiperSlide>
        <div className='flex bg-darkbg p-7'>
          <img src='https://media.multikino.pl/uploads/images/films_and_events/fa3bkffst6evxxuc.jpg' alt='' className='rounded-md'/>
          <div>
            <h3 className='ml-4'>capitan</h3>
            <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur reprehenderit, provident corporis quae pariatur voluptatibus hic accusamus, enim obcaecati quibusdam? Voluptas porro corporis nisi vel in suscipit, omnis dolores?</p>
          </div>
        </div>     
      </SwiperSlide>
       
      <SwiperSlide>
        <div className='flex bg-darkbg p-7'>
          <img src='https://media.multikino.pl/uploads/images/films_and_events/fa3bkffst6evxxuc.jpg' alt='' className='rounded-md'/>
          <div>
            <h3 className='ml-4'>capitan</h3>
            <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur reprehenderit, provident corporis quae pariatur voluptatibus hic accusamus, enim obcaecati quibusdam? Voluptas porro corporis nisi vel in suscipit, omnis dolores?</p>
          </div>
        </div>     
      </SwiperSlide>
       
    </Swiper>
    </div>
  
  )
}

export default SliderImage
