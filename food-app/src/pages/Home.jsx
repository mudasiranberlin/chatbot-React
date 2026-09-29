import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  categories,
  restaurants,
} from "../data/data";

import RestaurantCard from "../components/RestaurantCard";

export default function Home({
  favorites,
  toggleFavorite,
}) {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const filteredRestaurants =
    restaurants.filter((restaurant) =>
      restaurant.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <section className="screen active">
      <header className="header">
        <div className="header-row">
          <div className="location">
            📍 Lahore, Pakistan

            <strong>
              Deliver to Home⌄
            </strong>
          </div>

          <div className="header-icon">
            🔔
          </div>
        </div>

        <div className="search-box">
          🔍

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search for restaurants, cuisines..."
          />
        </div>
      </header>

      <div className="banner">
        <h2>
          Delicious Food
          <br />
          Delivered To You
        </h2>

        <p>
          Fresh · Fast · Tasty
        </p>

        <button
          onClick={() =>
            navigate("/restaurant")
          }
        >
          Order Now
        </button>

        <div className="banner-food">
          🍗
        </div>
      </div>

      <div className="section">
        <div className="section-title">
          <h3>Categories</h3>
        </div>

        <div className="categories">
          {categories.map(
            (category) => (
              <button
                className="category"
                key={category.name}
                onClick={() => {
                  if (
                    category.name ===
                    "Pizza"
                  ) {
                    navigate(
                      "/restaurant"
                    );
                  }
                }}
              >
                <div className="category-icon">
                  {category.icon}
                </div>

                <span>
                  {category.name}
                </span>
              </button>
            )
          )}
        </div>
      </div>

      <div className="section">
        <div className="section-title">
          <h3>
            Popular Restaurants
          </h3>

          <span>See All ›</span>
        </div>

        <div className="restaurant-grid">
          {filteredRestaurants
            .slice(0, 4)
            .map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                favorite={favorites.includes(
                  restaurant.id
                )}
                toggleFavorite={
                  toggleFavorite
                }
              />
            ))}
        </div>
      </div>
    </section>
  );
}
