import React from "react";
import { useNavigate } from "react-router-dom";

import {
  previousOrders,
} from "../data/data";

export default function Orders() {
  const navigate = useNavigate();

  return (
    <section className="screen active">
      <div className="page-header">
        <h2>My Orders</h2>
      </div>

      <div className="order-tabs">
        <button className="order-tab active">
          Current
        </button>

        <button className="order-tab">
          Past
        </button>
      </div>

      {previousOrders.map(
        (order, index) => (
          <div
            className="order-card"
            key={order.id}
            onClick={() => {
              if (index === 0) {
                navigate(
                  "/tracking"
                );
              }
            }}
          >
            <div className="order-image">
              {order.image}
            </div>

            <div className="order-content">
              <h4>
                {order.restaurant}
              </h4>

              <p>
                {order.item}
              </p>

              <strong>
                Rs.{" "}
                {order.price.toLocaleString()}
              </strong>

              <div className="delivered">
                ✓ Delivered
              </div>

              <small>
                {order.date}
              </small>
            </div>
          </div>
        )
      )}
    </section>
  );
}
