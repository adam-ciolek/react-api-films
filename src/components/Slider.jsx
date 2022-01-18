import React from "react";
// Import Swiper React components
import { Autoplay, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
// api data , global context
import { useGlobalContext } from "../context";
// icon
import { BsCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SliderImage = () => {
	const { slider } = useGlobalContext();

	return (
		<div className="py-32 mx-auto">
			<Swiper
				modules={[Autoplay, Navigation, EffectCoverflow]}
				autoplay={{ delay: 5000 }}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={4}
				loop={true}
				// navigation={true}
				effect={"coverflow"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				className="mySwiper"
			>
				{slider.map((movie) => {
					const { id, title, imDbRating, imDbRatingCount, year, image, crew } =
						movie;
					return (
						<SwiperSlide key={id}>
							<div className="flex bg-darkbg p-7 ">
								<img
									src={image}
									alt=""
									className="rounded-md"
									style={{ width: 150 }}
								/>
								<div className="ml-4">
									<h3 className="text-lg">{title}</h3>
									<h4 className="text-sm my-2">({year})</h4>
									<div className="flex flex-row my-2">
										<span className="text-sm">{imDbRating}/10</span>
										<span className="text-sm ml-8">
											{imDbRatingCount} votes
										</span>
									</div>
									<p className="text-sm">{crew}</p>
									<Link
										to="/"
										className="mr-8 capitalize text-lg hover:text-blue-700 transition"
									>
										more
									</Link>
									<button className="mt-7 text-2xl bg-gradient-to-r from-sky-three via-sky-two transition to-sky p-3 rounded-full hover:shadow-2xl hover:shadow-sky">
										<BsCaretRightFill className="fill-white" />
									</button>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default SliderImage;
