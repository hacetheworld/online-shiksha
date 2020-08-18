import React from "react";
import "./Checkout.style.scss";
import CheckoutItem from "../../../components/checkout-item/checkout-item.component";
import { Container, Row, Col } from "reactstrap";

const CheckoutPage = () => {
  const total = 99;
  return (
    <Container className="my-md">
      <Row>
        <Col lg="10">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course</th>
                <th scope="col">Course Name</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <CheckoutItem />
            </tbody>
            {/* <StripeCheckoutButton price={total} /> */}
          </table>
          <div className=" d-flex justify-content-end total">
            <span className="fa-3x">TOTAL : ${total}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
