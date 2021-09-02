import mongoose from "mongoose";

enum Check {
  Unchecked = "Unchecked",
  Checked = "Checked",
  Done = "Done",
}

const reportSchema = new mongoose.Schema(
  {
    replyId: { type: String, required: true },
    userId: { type: String, required: true },
    reason: { type: Number, required: true },
    text: { type: String },
    check: Check.Unchecked || Check.Checked || Check.Done,
    createdAt: Date,
    updatedAt: Date,
  },
  { versionKey: false }
);

/*
reportSchema.check의 경우 enum 사용

Report 예시

    {
        replyId: "4545645645644564",
        userId: "123abab384839b89",
        reason: 1,
        text: "닉네임에 욕설이 있습니다.",
        check: "Done",
        createdAt: 2021.09.02.(목) 18:46:25,
        updatedAt: 2021.09.02.(목) 18:47:01
    },
 

*/
module.exports = mongoose.model("Report", reportSchema, "Report");
