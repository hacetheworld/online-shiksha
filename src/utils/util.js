export const getTotal = (courses) => {
  let total = 0;
  courses.map((course) => (total += course.price));
  return total;
};
