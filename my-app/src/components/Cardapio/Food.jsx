import React from "react";

export default function Food({ id, title, category, price, img, desc }) {
    return (
      <div className="food-item">
        <img className="foodimg" alt={title} src={img} />
        <div className="food-detail">
          <div className="titlePrice">
            <h2 className="food-title"> {title}</h2>
            <h2 className="food-price"> ${price} </h2>
          </div>
          <p> {desc} </p>
        </div>
      </div>
    );
  }