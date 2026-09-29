import React, { useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

import BottomNav from "./components/BottomNav";
import Toast from "./components/Toast";

export default function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 950,
      quantity: 1,
      image: "🍕",
      size: "Medium",
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: 780,
      quantity: 1,
      image: "🍔",
      size: "With fries",
    },
    {
      id: 3,
      name: "Coke",
      price: 150,
      quantity: 1,
      image: "🥤",
      size: "500 ml",
    },
  ]);

  const [favorites, setFavorites] = useState([]);
  const [toast, setToast] = useState("");

  const location = useLocation();

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 1800);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity,
        },
      ];
    });

    showToast(`${product.name} added to cart`);
  };

  const updateCartQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) => {
          if (item.id !== id) return item;

          return {
            ...item,
            quantity: Math.max(
              0,
              item.quantity + amount
            ),
          };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((current) => {
      if (current.includes(id)) {
        showToast("Removed from favorites");

        return current.filter(
          (item) => item !== id
        );
      }

      showToast("Added to favorites");

      return [...current, id];
    });
  };

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const deliveryFee = cart.length ? 100 : 0;

  const total = subtotal + deliveryFee;

  const hideNav =
    location.pathname === "/" ||
    location.pathname === "/restaurant" ||
    location.pathname === "/product" ||
    location.pathname === "/tracking";

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Splash />} />

          <Route
            path="/home"
            element={
              <Home
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/restaurant"
            element={
              <Restaurant
                addToCart={addToCart}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/product/:id"
            element={
              <Product
                addToCart={addToCart}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCartQuantity={updateCartQuantity}
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                total={total}
                showToast={showToast}
              />
            }
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/tracking"
            element={<Tracking />}
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>

        {!hideNav && (
          <BottomNav cartCount={cartCount} />
        )}

        <Toast message={toast} />
      </div>
    </>
  );
}
