import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = () => {
  return (
    <tr>
      <td>1</td>
      <td>
        <div className=" image-container">
          <img src={require("../../assets/img/brand/blue.png")} alt="item" />
        </div>
      </td>
      <td>
        <span className="name">Data Structure and Algorithms</span>
      </td>
      <td>
        <span className="price">$ 99</span>
      </td>
      <td>
        <div className="remove-button">&#10005;</div>
      </td>
    </tr>
  );
};

export default CheckoutItem;
