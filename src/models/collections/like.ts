import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const likeSchema = new mongoose.Schema(
  {
    reply_id: { type: ObjectId, required: true, index: true },
    user_id: { type: ObjectId, required: true, index: true },
    like_state: {
      type: String,
      enum: ["LIKE", "DISLIKE", "NONE"],
    },
    created_at: Date,
  },
  { versionKey: false }
);

likeSchema.index({ reply_id: 1, user_id: -1 });

/*

Like 예시

    {
        reply_id: "4545645645644564",
        user_id: "123abab384839b89",
        like_state: "LIKE",
        created_at: 2021.09.02.(목) 18:46:25,
    },
 

*/
module.exports = mongoose.model("Like", likeSchema, "Like");
