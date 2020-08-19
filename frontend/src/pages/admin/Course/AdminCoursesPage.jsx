import React from "react";
import { Container, Row } from "reactstrap";
import AdminCourseCard from "../../../components/Admin/courseCard/AdminCourseCard";

export default function AdminCoursesPage() {
  return (
    <div className="course-card-section py-lg">
      <Container>
        <Row>
          <AdminCourseCard />
        </Row>
      </Container>
    </div>
  );
}
