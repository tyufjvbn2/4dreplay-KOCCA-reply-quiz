import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const quizSchema = new mongoose.Schema(
  {
      state: {
          type: String,
          enum: ["ONPROGRESS", "PARTICIPATED", "TERMINATED"],
          required: true
      },
    vod_id: { type: ObjectId, required: true, index: true },
    created_at: Date,
    updated_at: Date,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Quiz", quizSchema, "Quiz");
