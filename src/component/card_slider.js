import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import Popup from "../component/popup_show";
import Axios from "axios";
const Plugins = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  

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
    <div className="allBoxes">
    
      {post.map((item, index) => (
        <div className="box" key={index}>
          <div className="container">
            <div className='content'>
            <div className='overly'></div>
              <img src={item.image} alt="Plugin Icon" />
            </div>
            <p className='title'>{item.title}</p>
            
            
            <div className='content'>
              <a onClick={() => handleOpenPopup(item)} href="#">More...</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plugins;
