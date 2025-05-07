import {
  getAllCourses,
  getAllLectures,
  getCourseById,
  getCoursesOfUser,
} from "../../controllers/Course.js";
import { getAllUsers, getUserById } from "../../controllers/User.js";
import { CourseType } from "../../models/courseModel.js";

type sampleUserType = {
  name: string;
  age: number;
  gender: string;
};

const myUsers: sampleUserType[] = [];

export const GraphQLResolver = {
  Query: {
    //Routing
    users: getAllUsers,
    courses: getAllCourses,
    course: getCourseById,
    lectures: getAllLectures,
    sampleUsers: () => myUsers,
  },

  Course: {
    instructor: async (course: CourseType) => {
      if (!course.instructor) return null;
      return await getUserById(course.instructor.toString());
    },
  },

  User: {
    courses: getCoursesOfUser,
  },

  Mutation: {
    newUser: (_: any, { name, age, gender }: sampleUserType) => {
      myUsers.push({
        name,
        age,
        gender,
      });
      return "User Added Successfully";
    },
  },
};
