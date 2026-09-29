import React, {
  useMemo,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  menuItems,
} from "../data/data";

import QuantityControl from "../components/QuantityControl";

export default function Product({
  addToCart,
  favorites,
  toggleFavorite,
}) {
  const navigate = useNavigate();

  const { id } = useParams();

  const product = menuItems.find(
    (item) =>
      item.id === Number(id)
  );

  const [size, setSize] =
    useState({
      name: "Medium",
      price: product?.price || 950,
    });

  const [extras, setExtras] =
    useState([]);

  const [quantity, setQuantity] =
    useState(1);

  const extraOptions = [
    {
      name: "Extra Cheese",
      price: 150,
    },
    {
      name: "Olives",
      price: 100,
    },
    {
      name: "Mushrooms",
      price: 100,
    },
    {
      name: "Capsicum",
      price: 80,
    },
  ];

  const totalUnitPrice =
    useMemo(() => {
      const extrasTotal =
        extras.reduce(
          (sum, extra) =>
            sum + extra.price,
          0
        );

      return (
        size.price + extrasTotal
      );
    }, [size, extras]);

  if (!product) {
    return (
      <div className="screen active">
        <div className="empty-state">
          Product not found
        </div>
      </div>
    );
  }

  const toggleExtra = (extra) => {
    setExtras((current) => {
      const exists =
        current.some(
          (item) =>
            item.name === extra.name
        );

      if (exists) {
        return current.filter(
          (item) =>
            item.name !== extra.name
        );
      }

      return [...current, extra];
    });
  };

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        price: totalUnitPrice,
        size: size.name,
      },
      quantity
    );

    navigate("/cart");
  };

  return (
    <section className="screen active">
      <div className="product-image">
        <div
          className="cover-actions"
          style={{ top: "20px" }}
        >
          <button
            onClick={() =>
              navigate("/restaurant")
            }
          >
            ←
          </button>

          <button
            onClick={() =>
              toggleFavorite(
                product.id
              )
            }
            className={
              favorites.includes(
                product.id
              )
                ? "favorite-button active"
                : "favorite-button"
            }
          >
            {favorites.includes(
              product.id
            )
              ? "♥"
              : "♡"}
          </button>
        </div>

        <div className="big-food">
          {product.image}
        </div>
      </div>

      <div className="product-info">
        <div className="product-name-row">
          <div>
            <h2>
              {product.name}
            </h2>

            <div className="restaurant-details">
              🍕 Hot (300g)
            </div>
          </div>

          <div className="product-price">
            Rs.{" "}
            {totalUnitPrice.toLocaleString()}
          </div>
        </div>

        <p className="description">
          Classic pizza with fresh
          mozzarella cheese, tomato
          sauce and basil leaves.
        </p>

        <div className="option-title">
          Size
        </div>

        <div className="size-options">
          {[
            {
              name: "Small",
              price: 750,
              size: "8 inch",
            },
            {
              name: "Medium",
              price: product.price,
              size: "10 inch",
            },
            {
              name: "Large",
              price: 1150,
              size: "12 inch",
            },
          ].map((item) => (
            <button
              key={item.name}
              className={`size ${
                size.name === item.name
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSize(item)
              }
            >
              {item.name}
              <br />
              <small>
                ({item.size})
              </small>
            </button>
          ))}
        </div>

        <div className="option-title">
          Add Extra
        </div>

        {extraOptions.map(
          (extra) => {
            const checked =
              extras.some(
                (item) =>
                  item.name ===
                  extra.name
              );

            return (
              <label
                className="extra"
                key={extra.name}
              >
                <span>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      toggleExtra(
                        extra
                      )
                    }
                  />

                  {extra.name}
                </span>

                <span>
                  + Rs.{" "}
                  {extra.price}
                </span>
              </label>
            );
          }
        )}
      </div>

      <div className="product-bottom">
        <QuantityControl
          quantity={quantity}
          onDecrease={() =>
            setQuantity(
              Math.max(
                1,
                quantity - 1
              )
            )
          }
          onIncrease={() =>
            setQuantity(
              quantity + 1
            )
          }
        />

        <button
          className="btn btn-primary"
          onClick={
            handleAddToCart
          }
        >
          Add to Cart{" "}
          Rs.{" "}
          {(
            totalUnitPrice *
            quantity
          ).toLocaleString()}
        </button>
      </div>
    </section>
  );
}
