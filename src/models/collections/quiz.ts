import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const quizSchema = new mongoose.Schema(
	{
		vod_id: { type: ObjectId, required: true },
		event_state: {
			type: String,
			enum: ["ONPROGRESS", "PARTICIPATED", "TERMINATED"],
			required: true,
		},
		event_text: String,
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Quiz", quizSchema, "Quiz");
