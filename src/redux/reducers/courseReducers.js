import { courseActionTypes } from "../actionTypes/courseActionTypes";
import { data } from "../../data";

const INTIAL_STATE = {
  COURSES_SET: data,
  COURSE_CART: [],
};

const courseReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case courseActionTypes.ADD_TO_CART:
      return {
        ...state,
        COURSE_CART: [...state.COURSE_CART, action.course],
      };
    default:
      return state;
  }
};

export default courseReducer;
