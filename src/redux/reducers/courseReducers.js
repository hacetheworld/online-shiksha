import { courseActionTypes } from "../actionTypes/courseActionTypes";
import { data } from "../../data";

const INTIAL_STATE = {
  COURSES_SET: data,
  COURSE_CART: [],
  CURRENT_VIDEO: { url: "", title: "" },
};

const courseReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case courseActionTypes.ADD_TO_CART:
      return {
        ...state,
        COURSE_CART: [...state.COURSE_CART, action.course],
      };
    case courseActionTypes.PLAY_VIDEO:
      return {
        ...state,
        CURRENT_VIDEO: { url: action.video.url, title: action.video.title },
      };
    default:
      return state;
  }
};

export default courseReducer;
