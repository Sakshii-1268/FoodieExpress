import mongoose, { Document } from "mongoose";

export interface IUser {
  fullname: string;
  email: string;
  password: string;
  contact: number;
  address: string;
  city: string;
  country: string;
  profilePicture: string;
  admin: boolean;
  //? means it can be available or not (optional)
  lastLogin?: Date;
  isVerified?: Boolean;
  resetPasswordToken?: String;
  resetPasswordTokenExpiresAt?: Date;
  verificationToken?: String;
  verificationTokenExpiresAt?: Date;
}

export interface IUserDocument extends IUser, Document {
  createdAT: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      default: "Update Your address",
    },
    city: {
      type: String,
      default: "Update Your City",
    },
    country: {
      type: String,
      default: "Update Your Country",
    },
    profilePicture: {
      type: String,
      default: "",
    },
    admin: {
      type: Boolean,
      default: false,
    },

    //advanced authentication
    lastLogin: {
      type: Date,
      default: Date.now(),
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
