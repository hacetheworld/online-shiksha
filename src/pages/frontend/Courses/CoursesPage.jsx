import React from "react";
import { Container, Row } from "reactstrap";
import CourseCard from "../../../components/course-card/CourseCard.component";

//Redux
import { connect } from "react-redux";
class CoursesPage extends React.Component {
  render() {
    const { COURSES_SET } = this.props;
    return (
      <div className="course-card-section py-lg">
        <Container>
          <Row>
            {COURSES_SET.map((course, id) => (
              <CourseCard key={id} course={course} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  COURSES_SET: state.courses.COURSES_SET,
});
export default connect(mapStateToProps)(CoursesPage);
