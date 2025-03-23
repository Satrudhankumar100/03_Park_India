import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "./CustomerReview.css";
import "swiper/css";
import "swiper/css/effect-cards";

import CarLogo from "../../assets/CarLogo.jpg";

const reviews = [
  { name: "Mohan", review: "This is the best parking application", image: CarLogo },
  { name: "Krishan", review: "Very convenient and easy to use", image: CarLogo },
  { name: "Muskan", review: "Excellent service and well-organized" },
  { name: "Nehru", review: "Saved me a lot of time finding parking" },
  { name: "Raj Malhotra", review: "Highly recommend this app to everyone" }
];

const CustomerReview = () => {
  return (
    <div className="review-container">
      <h2 className="review-title">Our Customer Reviews</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <div className="review-header">
                <img src={review.image || CarLogo} alt="User" className="review-image" width={50}/>
              </div>
              <div className="review-content">
                <h3 className="review-name">{review.name}</h3>
                <p className="review-stars">★★★★★</p>
                <hr className="divider" />
                <p className="review-text">{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
