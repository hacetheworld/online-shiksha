import React from "react";
import { Container, Row } from "reactstrap";

import CourseCard from "../../../components/course-card/CourseCard.component";

export default function CoursesPage() {
  return (
    <div className="course-card-section py-lg">
      <Container>
        <Row>
          <CourseCard />
          <CourseCard className="mt-5 mt-md-0 mt-lg-0" />
          <CourseCard className=" mt-md" />
        </Row>
      </Container>
    </div>
  );
}
