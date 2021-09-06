import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const replySchema = new mongoose.Schema(
  {
    vod_id: { type: ObjectId, required: true, index: true },
    user_id: { type: ObjectId, required: true, index: true },
    reply_text: String,
    reply_report_state: {
      type: String,
      enum: ["OPEN", "UNCHECKED", "CHECKED", "BLOCK"],
    },
    like_count: Number,
    dislike_count: Number,
    created_at: Date,
    updated_at: Date,
  },
  { versionKey: false }
);

replySchema.index({ vod_id: 1, user_id: -1 });

/*

Reply 예시

    {
        _id : "1234123412341234",
        vod_id : "56565656565656",
        user_id : "ababab45ababab",
        reply_text : "영상 너무 재밌네요. 더 만들어 주세요",
        reply_report_state : "Open",
        like_count : 22
        created_at : 2021.09.02.(목) 18:54:22,
        updated_at : 2021.09.02.(목) 18:55:00
    }

*/
module.exports = mongoose.model("Reply", replySchema, "Reply");
