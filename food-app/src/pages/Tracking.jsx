import React from "react";
import { useNavigate } from "react-router-dom";

export default function Tracking() {
  const navigate = useNavigate();

  return (
    <section className="screen active">
      <div className="page-header">
        <button
          className="back"
          onClick={() =>
            navigate("/orders")
          }
        >
          ←
        </button>

        <h2>Track Order</h2>
      </div>

      <div className="map">
        <div className="road"></div>

        <div className="pin restaurant">
          📍
        </div>

        <div className="pin customer">
          📍
        </div>

        <div className="driver-map-icon">
          🛵
        </div>
      </div>

      <div className="driver-card">
        <div className="driver-row">
          <div className="driver-avatar">
            👨
          </div>

          <div className="driver-info">
            <h4>Ali Raza</h4>

            <p>
              Your delivery partner
            </p>

            <span className="rating">
              ★ 4.8 (312)
            </span>
          </div>

          <div className="driver-actions">
            <button>☎</button>
            <button>💬</button>
          </div>
        </div>

        <div className="track-meta">
          <span>
            Order #348729
          </span>

          <span>
            Arriving in 12 min
          </span>
        </div>

        <div className="progress">
          <div className="progress-step done">
            <div className="progress-dot"></div>
            Placed
          </div>

          <div className="progress-step done">
            <div className="progress-dot"></div>
            Preparing
          </div>

          <div className="progress-step active">
            <div className="progress-dot"></div>
            Out for
            <br />
            Delivery
          </div>

          <div className="progress-step">
            <div className="progress-dot"></div>
            Delivered
          </div>
        </div>
      </div>
    </section>
  );
}
