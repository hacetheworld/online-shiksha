export const getTotal = (courses) => {
  let total = 0;
  courses.map((course) => (total += course.price));
  return total;
};

export const getCurrentCourse = (courses, course_ID) => {
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].course_ID === course_ID) {
      return courses[i];
    }
  }
};
