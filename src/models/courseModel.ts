// models/Course.ts

import mongoose, { Document, Schema, Types } from "mongoose";

export interface CourseType {
  title: string;
  description: string;
  instructor: Types.ObjectId | string;
  ratingsAverage: number;
  ratingsQuality: number;
  price: number;
  category: string;
  subCategory: string;
  level: string;
  language: string;
  whatYouwillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  isPublished: boolean;
  isFree: boolean;
  isApproved: boolean;
  isRejected: boolean;
  isFeatured: boolean;
  isTrending: boolean;
  isBestseller: boolean;
  coverImage: string;
  previewVedio: string;
  students: Types.ObjectId[];

  createdAt?: Date;
  updatedAt?: Date;
}

export type CourseDocument = Document & CourseType;

const CourseSchema = new Schema<CourseDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: Schema.Types.ObjectId, ref: "User", required: true },
    ratingsAverage: { type: Number, required: true },
    ratingsQuality: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    level: { type: String, required: true },
    language: { type: String, required: true },
    whatYouwillLearn: [{ type: String, required: true }],
    requirements: [{ type: String, required: true }],
    targetAudience: [{ type: String, required: true }],
    isPublished: { type: Boolean, required: true },
    isFree: { type: Boolean, required: true },
    isApproved: { type: Boolean, required: true },
    isRejected: { type: Boolean, required: true },
    isFeatured: { type: Boolean, required: true },
    isTrending: { type: Boolean, required: true },
    isBestseller: { type: Boolean, required: true },
    coverImage: { type: String, required: true },
    previewVedio: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Course =
  mongoose.models.Course ||
  mongoose.model<CourseDocument>("Course", CourseSchema);
