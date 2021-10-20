import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const likeSchema = new mongoose.Schema(
	{
		reply_id: { type: ObjectId, required: true },
		user_id: { type: ObjectId, required: true },
		content_id: { type: ObjectId, required: true },
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Like", likeSchema, "like");
