import React from "react";
import "./Checkout.style.scss";
import CheckoutItem from "../../../components/checkout-item/checkout-item.component";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getTotal } from "../../../utils/util";
const CheckoutPage = (props) => {
  let courses = props.COURSE_CART;
  let total = getTotal(courses);
  return (
    <Container className="my-md">
      <Row>
        <Col lg="10">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Name</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {courses.length > 0
                ? courses.map((course, id) => (
                    <CheckoutItem key={id} courseData={course} />
                  ))
                : null}
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

const mapStateToProps = (state) => ({
  COURSE_CART: state.courses.COURSE_CART,
});
export default connect(mapStateToProps)(CheckoutPage);
