// models/User.ts

import mongoose, { Types } from "mongoose";

export interface UserType {
  name: string;
  googleId?: string;
  email: string;
  password?: string;
  gender?: "male" | "female";
  avatar?: string;
  verified: boolean;

  watching: Types.ObjectId[];
  watched: Types.ObjectId[];
  saved: Types.ObjectId[];

  role: "user" | "admin";

  verificationToken?: string;
  verificationExpire?: Date;

  passwordResetToken?: string;
  passwordResetExpire?: Date;
}

const schema = new mongoose.Schema<UserType>(
  {
    name: { type: String, required: true },
    googleId: { type: String, unique: true, sparse: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    gender: { type: String, enum: ["male", "female"] },
    avatar: { type: String },
    verified: { type: Boolean, default: false },

    watching: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    watched: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],

    role: { type: String, enum: ["user", "admin"], default: "user" },

    verificationToken: { type: String },
    verificationExpire: { type: Date },
    passwordResetToken: { type: String },
    passwordResetExpire: { type: Date },
  },
  { timestamps: true }
);

export const User =
  mongoose.models.User || mongoose.model<UserType>("User", schema);
