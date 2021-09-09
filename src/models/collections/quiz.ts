import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const quizSchema = new mongoose.Schema(
	{
		vod_id: { type: ObjectId, required: true },
		event_state: {
			type: String,
			enum: ["PREPARING", "ONPROGRESS", "TERMINATED"],
			required: true,
		},
		event_title: String,
		event_text: String,
		select_options: Array,
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Quiz", quizSchema, "Quiz");
