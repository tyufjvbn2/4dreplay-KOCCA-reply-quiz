import mongoose from "mongoose";
// import { ObjectId } from "mongodb";

const noticeSchema = new mongoose.Schema(
	{
		classifacation: {
			type: String,
			enum: ["NOTICE", "EVENT", "GUIDE"],
			required: true,
		},
		text: String,
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Notice", noticeSchema, "Notice");
