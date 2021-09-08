import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const reportSchema = new mongoose.Schema(
  {
    reply_id: { type: ObjectId, required: true, index: true },
    user_id: { type: ObjectId, required: true, index: true },
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
    report_text: { type: String, required: true },
    admin_check_state: {
      type: String,
      enum: ["UNCHECKED", "CHECKED", "DONE"],
    },
    created_at: Date,
    updated_at: Date,
  },
  { versionKey: false }
);

reportSchema.index({ reply_id: 1, user_id: -1 });

/*

Report 예시

    {
        reply_id: "4545645645644564",
        user_id: "123abab384839b89",
        report_reason: "BAD_NICKNAME",
        report_text: "닉네임에 욕설이 있습니다.",
        admin_check_state: "Done",
        created_at: 2021.09.02.(목) 18:46:25,
        updated_at: 2021.09.02.(목) 18:47:01
    },
 

*/
module.exports = mongoose.model("Report", reportSchema, "Report");
