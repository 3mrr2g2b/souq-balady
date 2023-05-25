import React from 'react';
import SwiperCore, { Autoplay,Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Axios from 'axios'
import { useState,useEffect } from "react";

// Import your custom CSS file
import 'swiper/css/pagination'
// Install Swiper components
SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
    const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  
     useEffect(() => {
    Axios.get('https://fakestoreapi.com/products/')
      .then(res => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  const [post, setPost] = useState([]);

  return (
    <Swiper
    autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      pagination={{ clickable: true }}
      pagination ={{dynamicBullets:true}}
      direction ={'vertical'}
      loop
    >
        {post.map((item, index) => (
      <SwiperSlide>
        <div className="box card" key={index}>
          <div className="container">
            <div className='content'>
            <div className='overly'></div>
              <img src={item.image} alt="Plugin Icon" />
            </div>
            <p>{item.title}</p>
            <div className="icon-g">
              <p>{item.price}</p>
              <i className="far fa-money-bill-alt"></i> |
              <p>100%</p> |
              <p>{item.rating.rate}</p>
              <i className="far fa-star"></i>
            </div>
            <br />
            <div className='content'>
           </div>
          </div>
        </div>
      </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default Slider;
