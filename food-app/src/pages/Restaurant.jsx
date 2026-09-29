import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  menuItems,
} from "../data/data";

import MenuItem from "../components/MenuItem";

export default function Restaurant({
  addToCart,
  favorites,
  toggleFavorite,
}) {
  const navigate = useNavigate();

  const [category, setCategory] =
    useState("Pizzas");

  const filteredItems =
    menuItems.filter(
      (item) =>
        item.category === category
    );

  return (
    <section className="screen active">
      <div className="restaurant-cover">
        <div className="cover-actions">
          <button
            onClick={() =>
              navigate("/home")
            }
          >
            ←
          </button>

          <button
            onClick={() =>
              toggleFavorite(1)
            }
            className={
              favorites.includes(1)
                ? "favorite-button active"
                : "favorite-button"
            }
          >
            {favorites.includes(1)
              ? "♥"
              : "♡"}
          </button>
        </div>
      </div>

      <div className="restaurant-title">
        <h2>
          The Pizza House
        </h2>

        <div className="restaurant-details">
          <span>
            ⭐ 4.5 (1.2k reviews)
          </span>

          <span>
            🍕 Italian
          </span>

          <span>
            ⏱ 30-40 min
          </span>
        </div>

        <div className="restaurant-details">
          📍 Rs. 200 for two
        </div>
      </div>

      <div className="tabs">
        <div className="tab active">
          Menu
        </div>

        <div className="tab">
          Reviews
        </div>

        <div className="tab">
          About
        </div>
      </div>

      <div className="menu-categories">
        {[
          "Pizzas",
          "Burgers",
          "Pastas",
          "Sides",
        ].map((item) => (
          <button
            key={item}
            className={`menu-cat ${
              category === item
                ? "active"
                : ""
            }`}
            onClick={() =>
              setCategory(item)
            }
          >
            {item}
          </button>
        ))}
      </div>

      {filteredItems.length ? (
        filteredItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))
      ) : (
        <div className="empty-state">
          <div>🍽️</div>
          <h3>
            No items available
          </h3>
          <p>
            Check another category.
          </p>
        </div>
      )}
    </section>
  );
}
