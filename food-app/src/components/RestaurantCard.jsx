import React from "react";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({
  restaurant,
  favorite,
  toggleFavorite,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="restaurant-card"
      onClick={() =>
        navigate("/restaurant")
      }
    >
      <div
        className={`food-image ${restaurant.color}`}
      >
        <button
          className={`heart ${
            favorite ? "active" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();

            toggleFavorite(restaurant.id);
          }}
        >
          {favorite ? "♥" : "♡"}
        </button>

        <div className="food-emoji">
          {restaurant.image}
        </div>
      </div>

      <div className="restaurant-info">
        <h4>{restaurant.name}</h4>

        <div className="restaurant-meta">
          <span className="rating">
            ★ {restaurant.rating}
          </span>{" "}
          ({restaurant.reviews})
        </div>

        <div className="restaurant-meta">
          {restaurant.category}
        </div>

        <div className="restaurant-meta">
          ⏱ {restaurant.delivery}
        </div>
      </div>
    </div>
  );
}
