import { courseActionTypes } from "../actionTypes/courseActionTypes";

export const addToCart = (course) => ({
  type: courseActionTypes.ADD_TO_CART,
  course,
});

export const playCurrentVideo = (video) => ({
  type: courseActionTypes.PLAY_VIDEO,
  video,
});
