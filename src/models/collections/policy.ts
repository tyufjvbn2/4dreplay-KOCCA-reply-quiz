import mongoose from "mongoose";

const policySchema = new mongoose.Schema(
	{
		content: String,
		created_at: Date,
		updated_at: Date,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Policy", policySchema, "policy");
