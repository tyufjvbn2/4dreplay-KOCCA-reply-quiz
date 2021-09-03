import mongoose from "mongoose";

const replySchema = new mongoose.Schema(
  {
    vodId: { type: String, required: true },
    userId: { type: String, required: true },
    text: String,
    report: {
      type: String,
      enum: ["OPEN", "UNCHECKED", "CHECKED", "BLOCK"],
    },
    createdAt: Date,
    updatedAt: Date,
  },
  { versionKey: false }
);

/*
replySchema.report의 경우 enum 사용
ex) replySchema.report: "Open" | "Unchecked" | "Checked" | "Block"

Reply 예시

    {
        _id : "1234123412341234",
        vodId : "56565656565656",
        userId : "ababab45ababab",
        text : "영상 너무 재밌네요. 더 만들어 주세요",
        report : "Open",
        createdAt : 2021.09.02.(목) 18:54:22,
        updatedAt : 2021.09.02.(목) 18:55:00
    }

*/
module.exports = mongoose.model("Reply", replySchema, "Reply");
