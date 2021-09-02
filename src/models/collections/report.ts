import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    replyId: { type: String, required: true },
    userId: { type: String, required: true },
    reason: { type: Number, required: true },
    text: { type: String },
    check: Boolean,
  },
  { versionKey: false }
);

/*
replySchema.report.result의 경우 custom boolean 사용
ex) replySchema.report.result: "open" | "unchecked" | "checked" | "block"

replySchema.report.contents = [
    {
        userId: "123abab384839b89",
        reason: 1,
        reason: "닉네임에 욕설이 있습니다.",
        check: "done"
    },
    {
        userId: "123123123123123bbb"
        reason: 2,
        reason: "댓글에 욕설이 너무 많습니다.",
        check: "unchecked"
        
    }
]

replySchema.report.contents에 배열로 각 신고를 저장
replySchema.report.contents[i].check : "unchecked" | "checked" | "done"

*/
module.exports = mongoose.model("Report", reportSchema, "Report");
