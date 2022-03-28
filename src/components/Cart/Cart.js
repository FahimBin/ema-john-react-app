import React from "react";
import "./Cart.css";
const Cart = ({cart}) => {
  return (
    <div>
      <h4>oder summary.</h4>
      <p>Selected items: {cart.length}</p>
    </div>
  );
};

export default Cart;
