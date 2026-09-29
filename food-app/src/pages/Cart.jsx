import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import QuantityControl from "../components/QuantityControl";

export default function Cart({
  cart,
  updateCartQuantity,
  subtotal,
  deliveryFee,
  total,
  showToast,
}) {
  const navigate = useNavigate();

  const [checkoutOpen, setCheckoutOpen] =
    useState(false);

  return (
    <section className="screen active">
      <div className="page-header">
        <button
          className="back"
          onClick={() =>
            navigate("/home")
          }
        >
          ←
        </button>

        <h2>Your Cart</h2>
      </div>

      <div className="cart-list">
        {cart.length === 0 ? (
          <div className="empty-state">
            <div>🛒</div>
            <h3>
              Your cart is empty
            </h3>

            <button
              className="btn btn-primary"
              onClick={() =>
                navigate(
                  "/restaurant"
                )
              }
            >
              Browse Food
            </button>
          </div>
        ) : (
          cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <div className="cart-food">
                {item.image}
              </div>

              <div className="cart-info">
                <h4>
                  {item.name}
                </h4>

                <p>
                  {item.size}
                </p>

                <strong>
                  Rs.{" "}
                  {(
                    item.price *
                    item.quantity
                  ).toLocaleString()}
                </strong>
              </div>

              <QuantityControl
                quantity={
                  item.quantity
                }
                onDecrease={() =>
                  updateCartQuantity(
                    item.id,
                    -1
                  )
                }
                onIncrease={() =>
                  updateCartQuantity(
                    item.id,
                    1
                  )
                }
              />
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <>
          <div className="section">
            <div className="section-title">
              <h3>
                ＋ Add more items
              </h3>
            </div>
          </div>

          <div className="summary">
            <div className="summary-row">
              <span>
                Subtotal
              </span>

              <span>
                Rs.{" "}
                {subtotal.toLocaleString()}
              </span>
            </div>

            <div className="summary-row">
              <span>
                Delivery Fee
              </span>

              <span>
                Rs.{" "}
                {deliveryFee}
              </span>
            </div>

            <div className="summary-row total">
              <span>Total</span>

              <span>
                Rs.{" "}
                {total.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            className="btn btn-primary checkout-btn"
            onClick={() =>
              setCheckoutOpen(true)
            }
          >
            Proceed to Checkout
          </button>
        </>
      )}

      {checkoutOpen && (
        <div
          className="modal show"
          onClick={() =>
            setCheckoutOpen(false)
          }
        >
          <div
            className="modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <h2>Checkout</h2>

            <div className="address-box">
              📍{" "}
              <strong>
                Home
              </strong>
              <br />
              123 Main Street,
              Lahore, Pakistan
            </div>

            <div className="payment">
              <span>
                💳 Payment
              </span>

              <strong>
                Cash on Delivery
              </strong>
            </div>

            <div className="payment">
              <span>
                Delivery
              </span>

              <strong>
                Rs. {deliveryFee}
              </strong>
            </div>

            <div className="payment">
              <strong>
                Total
              </strong>

              <strong>
                Rs.{" "}
                {total.toLocaleString()}
              </strong>
            </div>

            <button
              className="btn btn-primary"
              style={{
                marginTop: 18,
              }}
              onClick={() => {
                setCheckoutOpen(
                  false
                );

                showToast(
                  "Order placed successfully!"
                );

                setTimeout(() => {
                  navigate(
                    "/tracking"
                  );
                }, 500);
              }}
            >
              Place Order
            </button>

            <button
              className="btn"
              style={{
                background: "#eee",
                marginTop: 8,
              }}
              onClick={() =>
                setCheckoutOpen(
                  false
                )
              }
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
