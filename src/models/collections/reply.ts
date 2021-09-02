import mongoose from "mongoose";

// interface Reply {
//   vodId: string;
//   userId: string;
//   text: string;
// }

const replySchema = new mongoose.Schema(
  /*<Reply>*/ {
    vodId: { type: String, required: true },
    userId: { type: String, required: true },
    text: { type: String },
    report: Boolean,
    createdAt: Date,
    updatedAt: Date,
  },
  { versionKey: false }
);

/*
replySchema.report.result의 경우 custom boolean 사용
ex) replySchema.report.result: "open" | "unchecked" | "checked" | "block"

*/
module.exports = mongoose.model("Reply", replySchema, "Reply");
