import mongoose, { Schema, Types } from "mongoose";

const resourceSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
});

const videoURLSchema = new Schema({
  _480p: { type: String },
  _720p: { type: String },
  _1080p: { type: String },
});

const lectureSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    position: { type: Number, required: true },
    resources: [resourceSchema],
    videoUrl: videoURLSchema,
    duration: { type: Number, required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    instructor: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isPublished: { type: Boolean, required: true },
    isPreview: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const Lecture =
  mongoose.models.Lecture || mongoose.model("Lecture", lectureSchema);
