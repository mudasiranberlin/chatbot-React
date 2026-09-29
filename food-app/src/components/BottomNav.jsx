import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNav({
  cartCount,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      path: "/home",
      icon: "⌂",
      label: "Home",
    },
    {
      path: "/home",
      icon: "⌕",
      label: "Search",
    },
    {
      path: "/orders",
      icon: "▣",
      label: "Orders",
    },
    {
      path: "/favorites",
      icon: "♡",
      label: "Favorites",
    },
    {
      path: "/profile",
      icon: "♙",
      label: "Profile",
    },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((item, index) => {
        const active =
          location.pathname === item.path;

        return (
          <button
            key={index}
            className={`nav-item ${
              active ? "active" : ""
            }`}
            onClick={() =>
              navigate(item.path)
            }
          >
            <div className="nav-icon">
              {item.icon}

              {item.label === "Orders" &&
                cartCount > 0 && (
                  <span className="nav-badge">
                    {cartCount}
                  </span>
                )}
            </div>

            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
