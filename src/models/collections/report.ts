import mongoose from "mongoose";
import { ObjectId } from "mongodb";

// enum Check {
//   Unchecked = "Unchecked",
//   Checked = "Checked",
//   Done = "Done",
// }

const reportSchema = new mongoose.Schema(
  {
    reply_id: { type: ObjectId, required: true },
    user_id: { type: ObjectId, required: true },
    report_reason: {
      type: String,
      enum: [
        "BAD_NICKNAME",
        "VIOLENT_TEXT",
        "SEXUAL_TEXT",
        "AD_TEXT",
        "REPEATED",
        "OUTLAW",
        "ETC",
      ],
    },
    report_text: String,
    admin_check_state: {
      type: String,
      enum: ["UNCHECKED", "CHECKED", "DONE"],
    },
    created_at: Date,
    updated_at: Date,
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
