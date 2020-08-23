import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ courseData }) => {
  return (
    <tr>
      <td>{courseData.course_ID}</td>
      {/* <td>
        <div className=" image-container">
          <img src={require("../../assets/img/brand/blue.png")} alt="item" />
        </div>
      </td> */}
      <td>
        <span className="name">{courseData.courseName}</span>
      </td>
      <td>
        <span className="price">$ {courseData.price}</span>
      </td>
      <td>
        <div className="remove-button">&#10005;</div>
      </td>
    </tr>
  );
};

export default CheckoutItem;
