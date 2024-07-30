import Product from "../Product/Product";
import "./BestSeller.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css/navigation";

function BestSeller() {
  return (
    <div className="bestSeller section">
      <div className="header">
        <h2>Best Seller Products</h2>
        <div className="category">
          <span>Phones</span>
          <span>Grocery</span>
          <span>Baby Care</span>
          <span>Skin care</span>
          <span>Electronics</span>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BestSeller;
