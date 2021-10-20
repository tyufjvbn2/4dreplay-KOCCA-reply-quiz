import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const quizSchema = new mongoose.Schema(
	{
		content_id: { type: ObjectId, required: true },
		vod_id: { type: ObjectId, required: true },
		event_id: { type: ObjectId, required: true },
		quiz_title: String,
		quiz_text: String,
		select_options: Array,
		quiz_answer: Number,
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Quiz", quizSchema, "Quiz");
