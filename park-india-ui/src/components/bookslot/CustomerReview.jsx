import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards,Autoplay } from "swiper/modules";
import "./CustomerReview.css"; // Fixed the import
import "swiper/css"; // Added Swiper core CSS
import "swiper/css/effect-cards"; // Ensures effect styling

import CarLogo from "../../assets/CarLogo.jpg";

const CustomerReview = () => {
  return ( // Added return statement
    <div>
      <h2>Our Cusomer Review</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }} // Auto-swipe every 3s
      >
        <SwiperSlide>
            <div className="review-card">
                <div className="review-header flex">
                <img src={CarLogo} alt="Car Logo" width={50} />

                </div>
                <div>
                    <h3>Mohan</h3>
                    <p>Review ******</p>
                </div>
                <hr />
                <p className="text-2xl">This is best parking application</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-card">
                <div className="review-header">
                    <img src="" alt="" />
                </div>
                <div>
                    <h3>Krishan</h3>
                    <p>Review ******</p>
                </div>
                <hr />
                <p>This is best parking application</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-card">
                <div className="review-header">
                    <img src="" alt="" />
                </div>
                <div>
                    <h3>Muskan</h3>
                    <p>Review ******</p>
                </div>
                <hr />
                <p>This is best parking application</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-card">
                <div className="review-header">
                    <img src="" alt="" />
                </div>
                <div>
                    <h3>Nehru</h3>
                    <p>Review ******</p>
                </div>
                <hr />
                <p>This is best parking application</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-card">
                <div className="review-header">
                    <img src="" alt="" />
                </div>
                <div>
                    <h3>Raj Malhotra</h3>
                    <p>Review ******</p>
                </div>
                <hr />
                <p>This is best parking application</p>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default CustomerReview;
