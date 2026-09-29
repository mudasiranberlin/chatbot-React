import React from "react";
import {
  useNavigate,
} from "react-router-dom";

import {
  favorites as favoriteData,
} from "../data/data";

export default function Favorites({
  favorites,
  toggleFavorite,
}) {
  const navigate = useNavigate();

  const savedRestaurants =
    favoriteData.filter((item) =>
      favorites.length
        ? favorites.includes(
            item.id
          )
        : true
    );

  return (
    <section className="screen active">
      <div className="page-header">
        <h2>Favorites</h2>
      </div>

      <div className="order-tabs">
        <button className="order-tab active">
          Restaurants
        </button>

        <button className="order-tab">
          Dishes
        </button>
      </div>

      {savedRestaurants.map(
        (restaurant) => (
          <div
            className="favorite-card"
            key={restaurant.id}
            onClick={() =>
              navigate(
                "/restaurant"
              )
            }
          >
            <div className="favorite-image">
              {restaurant.image}
            </div>

            <div className="favorite-info">
              <h4>
                {restaurant.name}
              </h4>

              <p>
                ⭐{" "}
                {restaurant.rating}{" "}
                ({restaurant.reviews})
              </p>

              <p>
                {restaurant.category}
              </p>
            </div>

            <button
              className="favorite-heart"
              onClick={(e) => {
                e.stopPropagation();

                toggleFavorite(
                  restaurant.id
                );
              }}
            >
              ♥
            </button>
          </div>
        )
      )}
    </section>
  );
}
