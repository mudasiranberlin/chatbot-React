import React from "react";
import { useNavigate } from "react-router-dom";

export default function MenuItem({
  item,
  addToCart,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="menu-item"
      onClick={() =>
        navigate(`/product/${item.id}`)
      }
    >
      <div className="menu-item-image">
        {item.image}
      </div>

      <div className="menu-item-content">
        <h4>{item.name}</h4>

        <p>{item.description}</p>

        <div className="price">
          Rs. {item.price.toLocaleString()}
        </div>
      </div>

      <button
        className="add-btn"
        onClick={(e) => {
          e.stopPropagation();

          addToCart(item);
        }}
      >
        +
      </button>
    </div>
  );
}
