import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const quizUserDataSchema = new mongoose.Schema(
	{
		quiz_id: { type: ObjectId, required: true },
		user_id: { type: ObjectId, required: true },
		name: String,
		phone_number: Number,
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model(
	"Quiz_user_data",
	quizUserDataSchema,
	"quiz_user_data"
);
