import mongoose, { Schema } from "mongoose";

const formSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
  avgViewsReels: {
    type: Number,
    required: true,
  },
  avgLikesReels: {
    type: Number,
    required: true,
  },
  avgCommentsReels: {
    type: Number,
    required: true,
  },
  avgEngagement: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stateOrCity: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  followersRatioImage: {
    type: String, // URL to the image of men/women follower ratio
    // required: true,
  },
  topCitiesImage: {
    type: String, // URL to the image of top cities
    // required: true,
  },
  ageRangeImage: {
    type: String, // URL to the image of age range
    // required: true,
  },
}, { timestamps: true });

export const Form = mongoose.model("Form", formSchema, "form");


