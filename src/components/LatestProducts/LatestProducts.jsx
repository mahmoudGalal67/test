import Product from "../Product/Product";

import "../BestSeller/BestSeller.css";
import "./LatestProducts.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css/scrollbar";
import "swiper/css/navigation";

function LatestProducts() {
  return (
    <div className="latest-products section">
      <div className="left">
        <h2>The Latest Items</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Scrollbar]}
          scrollbar={{ draggable: true }}
          navigation
        >
          <SwiperSlide>
            <div className="wrapper">
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="home/cat 1.png" alt="" />
                <div className="info">
                  <p>
                    A wonderful and <br />
                    of home and office
                  </p>
                  <div className="price">
                    <span className="new-price">50,00 EGP</span>
                    <span className="old-price">53,00 EGP</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="right">
        <div className="bestSeller">
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

          <div className="wrapper">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;
