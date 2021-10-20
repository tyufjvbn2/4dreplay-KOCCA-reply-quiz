import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const quizUserSchema = new mongoose.Schema(
	{
		quiz_id: { type: ObjectId, required: true },
		user_id: { type: ObjectId, required: true },
		option: Number,
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("quiz_user", quizUserSchema, "quiz_user");
