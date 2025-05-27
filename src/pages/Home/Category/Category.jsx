import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/slide1.jpeg";
import slide2 from "../../../assets/slide2.jpeg";
import slide3 from "../../../assets/slide3.jpeg";
import slide4 from "../../../assets/slide4.jpeg";
import slide5 from "../../../assets/slide5.jpeg";
import slide6 from "../../../assets/slide6.jpeg";
import slide7 from "../../../assets/slide7.jpeg";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  const categories = [
    { image: slide1, name: "Architecture" },
    { image: slide2, name: "Islamic" },
    { image: slide3, name: "Science" },
    { image: slide4, name: "Traditional" },
    { image: slide5, name: "Automobile" },
    { image: slide6, name: "Abstract" },
    { image: slide7, name: "Nature" },
  ];

  return (
    <>
      <SectionTitle heading={"Categories"} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <img src={category.image} alt={category.name} />
            <h3 className="text-center text-2xl font-bold uppercase">
              {category.name}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category;
