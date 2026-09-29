import React from "react";

export default function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className="qty">
      <button onClick={onDecrease}>
        −
      </button>

      <span>{quantity}</span>

      <button onClick={onIncrease}>
        +
      </button>
    </div>
  );
}
