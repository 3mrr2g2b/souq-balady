import React from "react";

const PopupShow = ({ post, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-card">
        <h3 className='popup-text'>Title: {post.title}</h3>
        {post && (
          <div>
          <div className='con'>
            <img className='popup-image' src={post.image} alt="Plugin Icon" />
            <div className='conent'>
            <p className='popup-text'>Price:{post.price} <i className="far fa-money-bill-alt"></i></p>
              <p className='popup-text'>Rating: {post.rating.rate} <i class='far fa-star'></i></p>
            </div>
            </div>
            {/* Add other properties you want to display */}
            <p className='popup-text'>description: {post.description}</p>
          </div>
        )}
        <button className='popup-button' post={post} onClick={onClose}>Add To Store</button>
      </div>
    </div>
  );
};

export default PopupShow;
