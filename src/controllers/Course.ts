import { Course } from "../models/courseModel.js";
import { Lecture } from "../models/lectureModel.js";
import type { HydratedDocument } from "mongoose";
import { UserType } from "../models/userModel.js";

export const getAllCourses = async () => {
  const courses = await Course.find();
  return courses;
};

export const getCourseById = async (_: any, arg: { id: string }) => {
  const course = await Course.findById(arg.id);
  return course;
};

export const getAllLectures = async () => {
  const lectures = await Lecture.find();
  return lectures;
};

export const getCoursesOfUser = async (user: HydratedDocument<UserType>) => {
  const courses = await Course.find({
    instructor: user._id,
  });
  return courses;
};
