import React from "react";
import { Link } from "react-router-dom";
export default function NotFoundPage(props) {
  return (
    <section className="section">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3>404 page not found</h3>
          <p>We are sorry but the page you are looking for does not exist.</p>
          <Link to="/dashboard">Go To Home</Link>
        </div>
      </div>
    </section>
  );
}
