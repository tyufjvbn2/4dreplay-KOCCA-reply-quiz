import mongoose from "mongoose";
const Reply = require("../../../models/collections/reply");
const Report = require("../../../models/collections/report");

import { ReplyParams } from "../../resolver/interfaces/replyInterface";

export const replyResolver = {
	//--------------//
	// Query Method //
	//--------------//

	test: () => {
		return "Query is working well!";
	},
	replyList: async (arg: ReplyParams) => {
		const { first, offset } = arg;
		const result = await Reply.find(
			arg.reply_report_state && {
				reply_report_state: arg.admin_check_state,
			}
		)
			.sort({ field: "desc", _id: -1 })
			.skip(first)
			.limit(offset);
		console.log("data", result);
		return result;
	},
	replyOne: async (_id: mongoose.Types.ObjectId) => {
		const one = await Reply.findById(_id);
		return one;
	},
	replyByVod: async (vod_id: mongoose.Types.ObjectId) => {
		const byVod = await Reply.find(vod_id);
		console.log("byVod", byVod);
		return byVod;
	},
	replyByUserId: async (user_id: string) => {
		const byUserId = await Reply.find(user_id);
		console.log("byUserId", byUserId);
		return byUserId;
	},
	reportList: async (arg: ReplyParams) => {
		const { first, offset } = arg;
		return await Report.find(
			arg.admin_check_state && {
				admin_check_state: arg?.admin_check_state,
			}
		)
			.sort({ field: "desc", _id: -1 })
			.skip(first)
			.limit(offset);
	},
	reportOne: async (_id: mongoose.Types.ObjectId) => {
		return await Report.findById(_id);
	},
	reportByReply: async (reply_id: mongoose.Types.ObjectId) => {
		return await Report.find(reply_id);
	},

	//-----------------//
	// Mutation Method //
	//-----------------//

	createReply: async (arg: ReplyParams) => {
		console.log("params", arg);
		const { vod_id, user_id, reply_text } = arg;
		const newOne = await Reply.create({
			vod_id: vod_id,
			user_id: user_id,
			reply_text: reply_text,
			reply_report_state: "OPEN",
			created_at: new Date(),
			updated_at: new Date(),
		});
		console.log("created", newOne);
		return newOne;
	},

	deleteReply: async (_id: mongoose.Types.ObjectId) => {
		const target = await Reply.findOneAndDelete(_id);
		console.log("target", target);
		return target;
	},

	updateReply: async (arg: ReplyParams) => {
		const { _id, reply_text } = arg;
		console.log("params", _id, reply_text);
		const update = await Reply.findOneAndUpdate(
			{ _id: _id },
			{
				reply_text: reply_text,
				updated_at: new Date(),
			},
			{ returnOriginal: false }
		);
		console.log("update", update);
		return update;
	},

	changeReplyReportState: async (arg: ReplyParams) => {
		const { _id, reply_report_state } = arg;
		const adminChk = await Reply.findOneAndUpdate(
			{ _id: _id },
			{
				reply_report_state: reply_report_state,
				updated_at: new Date(),
			},
			{ returnOriginal: false }
		);
		console.log("adchk", adminChk);
		return adminChk;
	},

	createReport: async (arg: ReplyParams) => {
		const { reply_id, user_id, report_reason, report_text } = arg;
		const newReport = await Report.create({
			reply_id: reply_id,
			user_id: user_id,
			report_reason: report_reason,
			report_text: report_text,
			admin_check_state: "UNCHECKED",
			created_at: new Date(),
			updated_at: new Date(),
		});
		console.log("new", newReport);
		return newReport;
	},

	checkReport: async (arg: ReplyParams) => {
		const { _id, admin_check_state } = arg;
		const rptChk = await Report.findOneAndUpdate(
			{ _id: _id },
			{
				admin_check_state: admin_check_state,
				updated_at: new Date(),
			},
			{ returnOriginal: false }
		);
		console.log("chk", rptChk);
		return rptChk;
	},
};
