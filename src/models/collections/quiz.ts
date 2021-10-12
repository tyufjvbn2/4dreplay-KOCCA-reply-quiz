import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const quizSchema = new mongoose.Schema(
	{
		content_id: { type: ObjectId, required: true },
		vod_id: { type: ObjectId, required: true },
		event_state: {
			type: String,
			enum: ["PREPARING", "ONPROGRESS", "TERMINATED"],
			required: true,
		},
		event_title: String,
		event_text: String,
		select_options: Array,
		event_start: Date,
		event_end: Date,
		event_winning_publication: Date,
		event_policy_text: String,
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Quiz", quizSchema, "Quiz");
