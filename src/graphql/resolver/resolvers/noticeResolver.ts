import mongoose from "mongoose";

const Notice = require("../../../models/collections/notice");

import { noticeParams } from "../interfaces/noticeInterface";

export const noticeResolver = {
	//--------------//
	// Query Method //
	//--------------//

	test3: () => {
		return "This will use for notice";
	},

	noticeList: async (arg: noticeParams) => {
		const { first, offset } = arg;
		return await Notice.find()
			.sort({ field: "desc", _id: -1 })
			.skip(first)
			.limit(offset);
	},

	noticeOne: async (_id: mongoose.Types.ObjectId) => {
		return await Notice.findById(_id);
	},

	noticeByClass: async (arg: noticeParams) => {
		const { classification, first, offset } = arg;
		return await Notice.find({ classification: classification })
			.sort({ field: "desc", _id: -1 })
			.skip(first)
			.limit(offset);
	},

	noticeBySearch: async (arg: noticeParams) => {
		const { first, offset, search_text, classification } = arg;
		console.log("how many", await Notice.count({}));
		if (classification === "ALL") {
			const result = await Notice.aggregate([
				{ $match: { notice_title: { $regex: search_text } } },
			])
				.sort({ field: "desc", _id: -1 })
				.skip(first)
				.limit(offset);
			// const target = await Notice.aggregate([
			// 	{ $match: { notice_title: { $regex: search_text } } },
			// ]);
			const totalTargetNotice = await Notice.count({
				notice_title: { $regex: search_text },
			});
			console.log("how long?", totalTargetNotice);
			return {
				data: result,
				length: totalTargetNotice,
			};

			/* still have problem!! */

			// return await Notice.find({ notice_title: { $regex: search_text } })
			// 	.sort({ field: "desc", _id: -1 })
			// 	.skip(first)
			// 	.limit(offset);
			// .aggregate([
			// 	{
			// 		$addFields: {
			// 			totalNotice: await Notice.count({}),
			// 		},
			// 	},
			// ]);
		} else {
			const result = await Notice.find({
				classification: classification,
				notice_title: { $regex: search_text },
			})
				.sort({ field: "desc", _id: -1 })
				.skip(first)
				.limit(offset);
			const totalTargetNotice = await Notice.count({
				classification: classification,
				notice_title: { $regex: search_text },
			});
			return {
				data: result,
				length: totalTargetNotice,
			};
		}
	},

	//-----------------//
	// Mutation Method //
	//-----------------//

	createNotice: async (arg: noticeParams) => {
		console.log("check arg", arg);
		const { classification, notice_title, notice_text } = arg;
		const newNotice = await Notice.create({
			classification: classification,
			notice_title: notice_title,
			notice_text: notice_text,
			created_at: new Date(),
			updated_at: new Date(),
		});
		return newNotice;
	},

	deleteNotice: async (_id: mongoose.Types.ObjectId) => {
		return await Notice.findOneAndDelete(_id);
	},

	updateNotice: async (arg: noticeParams) => {
		const { _id } = arg;
		const original = await Notice.findById(_id);
		return await Notice.findOneAndUpdate(
			{ _id: _id },
			{
				classification: arg.classification
					? arg.classification
					: original.classification,
				notice_title: arg.notice_title
					? arg.notice_title
					: original.notice_title,
				notice_text: arg.notice_text
					? arg.notice_text
					: original.notice_text,
				updatede_at: new Date(),
			},
			{ returnOriginal: false }
		);
	},
};
