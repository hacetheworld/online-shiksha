import { courseActionTypes } from "../actionTypes/courseActionTypes";

export const addToCart = (course) => ({
  type: courseActionTypes.ADD_TO_CART,
  course,
});
