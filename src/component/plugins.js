import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import Popup from "../component/popup_show";
import Axios from "axios";
import PageLoader from '../component/pageLoader/pageLoader';

const Plugins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  useEffect(() => {
    Axios.get('https://fakestoreapi.com/products/')
      .then(res => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleOpenPopup = (post) => {
    setSelectedPost(post);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const options = [
    {
      id: 1,
      color_title: 'Black'
    },
    {
      id: 2,
      color_title: 'Red'
    },
    {
      id: 3,
      color_title: 'Gray'
    },
    {
      id: 4,
      color_title: 'White'
    },
  ];

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="allBoxes">
          {post.map((item, index) => (
            <div className="box" key={index}>
              <div className="container">
                <div className='content'>
                  <div className='overly'></div>
                  <img src={item.image} alt="Plugin Icon" />
                </div>
                <p className='title'>{item.title}</p>
                <div className='desc'>
                  Cillum enim dolore est ex qui id ex voluptate. Dolor pariatur ipsum tempor laborum sint sit ullamco exercitation ut ad labore Lorem quis consequat. Esse pariatur ipsum et ut duis velit voluptate velit reprehenderit ea eu deserunt esse dolore.
                </div>
                <div className='content con'>
                  <select className='select'>
                    {options.map((el, ind) => (
                      <option key={ind} value={el.color_title}>{el.color_title}</option>
                    ))}
                  </select>
                  <a className='a' onClick={() => handleOpenPopup(item)}>Order...</a>
                </div>
              </div>
            </div>
          ))}
          {showPopup && <Popup post={selectedPost} onClose={handleClosePopup} />}
        </div>
      )}
    </>
  );
};

export default Plugins;
