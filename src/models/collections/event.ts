import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const eventSchema = new mongoose.Schema(
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
		event_start: Date,
		event_end: Date,
		event_winning_publication: Date,
		event_policy_text: String,
		event_child: Array, //퀴즈 objectId 저장
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Event", eventSchema, "events");
