import React from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <section className="screen active splash">
      <div className="food-hero">
        <div className="hero-food">🍗</div>
      </div>

      <div className="splash-content">
        <div className="logo-chef">
          👨‍🍳
        </div>

        <div className="splash-logo">
          Foodie
        </div>

        <div className="tagline">
          Good Food&nbsp;&nbsp; Good Mood
        </div>

        <button
          className="btn btn-primary"
          onClick={() =>
            navigate("/home")
          }
        >
          Get Started
        </button>

        <button
          className="btn btn-outline"
          onClick={() =>
            navigate("/home")
          }
        >
          Log In
        </button>
      </div>
    </section>
  );
}
