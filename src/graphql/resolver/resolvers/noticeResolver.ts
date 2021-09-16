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
			return await Notice.find({ notice_title: { $regex: search_text } })
				.sort({ field: "desc", _id: -1 })
				.skip(first)
				.limit(offset);
			// .aggregate([
			// 	{
			// 		$addFields: {
			// 			totalNotice: await Notice.count({}),
			// 		},
			// 	},
			// ]);
		} else {
			return await Notice.find({
				classification: classification,
				notice_title: { $regex: search_text },
			})
				.sort({ field: "desc", _id: -1 })
				.skip(first)
				.limit(offset);
		}
	},

	//-----------------//
	// Mutation Method //
	//-----------------//
};
