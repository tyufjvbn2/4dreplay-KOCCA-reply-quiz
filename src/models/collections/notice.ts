import mongoose from "mongoose";
// import { ObjectId } from "mongodb";

const noticeSchema = new mongoose.Schema(
	{
		classification: {
			type: String,
			enum: ["NOTICE", "EVENT", "GUIDE"],
			required: true,
		},
		notice_title: String,
		notice_text: String,
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Notice", noticeSchema, "Notice");
