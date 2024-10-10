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
  age_13_17: {
    type: Number
  },
  age_18_24: {
    type: Number
  },
  age_25_34: {
    type: Number
  },
  age_35_44: {
    type: Number
  },
  age_45_54: {
    type: Number
  },
  age_55: {
    type: Number
  },
}, { timestamps: true });

export const Form = mongoose.model("Form", formSchema, "form");


